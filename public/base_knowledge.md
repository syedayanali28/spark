# SPARK Team Mailbox Assistant Knowledge Base

## Introduction
SPARK (Team Mailbox Assistant) is an intelligent, AI-powered utility developed by the SPARK Team at the Hong Kong Monetary Authority (HKMA). It streamlines email management for IT team mailboxes by automating summarization, categorization, and insights generation. Designed as a VD-native application, SPARK runs locally on users' Virtual Desktops (VDs) to ensure data security and compliance. It processes only "Restricted" or below emails, integrating with existing systems like CMMP (via IMAP) and LLM providers (e.g., MaaS or SARA) for AI capabilities.

Key goals include reducing manual effort, improving efficiency, providing consolidated insights, and ensuring consistent categorization. SPARK was developed iteratively through sprints, with Sprint 3 focusing on roadshows, SLM research, and feedback collection. It adheres to HKMA's AI Governance Framework, data governance standards, and ethical AI principles.

## Background and Objectives
### Project Context
- **Current Challenges**: High email volumes in team mailboxes lead to manual processing, missed priorities, fragmented workflows, and lack of management insights. Outlook's rule-based categorization is limited (keyword-based, no context awareness), and there's inadequate reporting for trends like alert frequencies or request distributions.
- **Solution Need**: An LLM-based tool to batch-process emails, summarize content, categorize based on context, and provide role-based views for seniors, team leads, and working-level staff.
- **Development Timeline**: Initiated in 2025, with Sprint 3 (December 2025) achieving roadshows (2 sessions, 30+ participants, feedback from 4+ teams) and SLM research (testing 3 models; best: Qwen2.5-0.5B Instruct).
- **Business Objectives**:
  - Streamline workflows by reducing human input.
  - Enhance visibility on workloads and statistics.
  - Ensure consistent categorization via admin-editable prompts.
  - Align with HKMA's digital transformation, focusing on operational efficiency and cost reduction.

### Stakeholders and Roles
- **Project Owner**: YU Chi-hong, Calvin (D(IT)(BSA)).
- **IT Lead**: Ray YC Tsoi (A(SYS)(IT)(AS2)2).
- **Data Owner**: CHAN Muk-hoi, Joseph (CIO).
- **Delegated Data Owner/Data Steward/Technical Steward**: Calvin YU (D(IT)(BSA)).
- **Impacted Groups**: IT teams (e.g., Application & Operation), management for insights, working staff for task allocation.

## Features and Benefits
### Core Features
- **Summarization**: Batch generates summaries of incoming emails (insights layer). Provides daily digests with trends, volumes, and high-priority highlights.
- **Categorization**: Applies context-aware batch categorization, moving emails to Outlook folders (action layer). Syncs via IMAP for consistency.
- **Custom Configuration**: Admins edit prompts and categories; users configure mailbox folders and prompt history.
- **Role-Based Views** (Feature Matrix):
  | Role          | Summarization Benefits                  | Categorization Benefits                          |
  |---------------|-----------------------------------------|--------------------------------------------------|
  | Senior Level | Weekly/monthly reports; frequency/trends of email types | N/A                                             |
  | Team Lead    | Summary of assigned tasks; frequency of types received | Clarify allocation of email types               |
  | Working Level| N/A                                     | View categorization results (Outlook & SPARK)   |
- **Security Filters**: Processes only "Restricted" or below emails; fail-closed for confidential/encrypted/untagged.
- **Integrations**: CMMP for email ingestion, MaaS/SARA for LLM, potential future links to Dify or other apps.

### Benefits
- **Efficiency**: Automates routine tasks, reduces manual categorization, and prioritizes actions.
- **Insights**: Consolidated views for management (e.g., alert trends, request distributions).
- **Compliance**: No data leaves VDI; no storage of usernames, passwords, email content, or personal data.
- **Deployment**: Standalone executable (.exe) on local VDI; no central server needed.

### Comparison with Peers
| Aspect          | SPARK                  | Outlook                | NOVA                   | Dify                   |
|-----------------|------------------------|------------------------|------------------------|------------------------|
| Deployment     | Local VD-native app   | Standalone app        | Office Add-In         | Server-based web app  |
| Network         | Standalone            | N/A                    | N/A                    | Server-based          |
| CMMP Connection| Yes (IMAP)            | Yes                    | Copy-paste emails     | N/A                   |
| AI Capability  | Batch summarization & categorization | Rule-based (keywords) | Single translate/draft/summarization | Workflow integration |
| Proposition    | Team-based insights & actions | All emails handling   | Personal use          | Server-based AI      |
| Batch Operation| Yes                   | No                     | No                     | N/A                   |

## Architecture
### Logical Architecture
- **Components**: Frontend (React.js/Typescript), Backend (FastAPI/Python).
- **Workflow**: Emails ingested from CMMP via IMAP (AD-authenticated service accounts). Prompts fetched from Confluence/SharePoint. LLM processing via MaaS (no queue management; potential switch to SARA).
- **Data Flow**: User inputs credentials for IMAP and OA (SARA auth). Emails processed locally; categories synced back to CMMP.
- **Notes**: No direct frontend-DB access; 3-layer design. Future: Workflow templates, integration with Dify/apps.

### Physical Architecture
- **Setup**: All components connected via HTTPS. SPARK connects to AD for auth, CMMP for emails, MaaS for LLM.
- **Hosting**: On-premises/local VD; no cloud.
- **Authentication**: OAuth for Jira/SharePoint; AD for IMAP. User credentials for login (UAT: username/password; Prod: AD-integrated).
- **Limitations**: Functional team mailboxes only (no CMS emails unless prefixed in subject).

### Network Architecture
- **Connections**: HTTPS to MaaS (depends on usage; queue via SARA if needed). IMAP/AD for mailboxes. Jira auth via OAuth.
- **Security**: Runs in VDI; no external data exposure.

### Non-Functional Features
- **Deployment**: .exe installer; UI via static HTML.
- **Auth**: AD-managed; UAT uses username/password.
- **Logging**: Application logs user actions (no sensitive data).
- **Scheduling**: Auto-runs non-peak hours (not in UAT).
- **Tech Stack**: Python (FastAPI), Typescript (React.js).

## Data Governance and Metadata
### Data Types and Lifecycle
- **Datasets**:
  - **User Configuration**: Prompt history (first 10 records), mailbox folder descriptions. Stored in IndexedDB (browser); no processing/sharing; retained until user removal.
  - **Application Logs**: User actions (login/logout, fetch emails, API calls; no content/PII). Stored in Windows logs; for Audit Team; retained 180 days.
  - **Categories**: Folder names synced with CMMP; no processing; shared with team mailbox users; retained until removal.
- **Lifecycle**: Creation (local input), Processing (minimal/direct store), Storage (local), Usage (individual/team), Sharing (none intended), Disposal (user-initiated or timed).
- **Classification**: All "Restricted"; no personal data.
- **Encryption**: Not applicable (no PII stored).
- **Access Control**: Local to VD user; no RBAC (decentralized). Audit logs track actions (180 days retention).
- **Compliance**: No data sharing agreements; aligns with HKMA policies (e.g., no external reporting/CDE).

### Metadata
- **Name**: Spark metadata.
- **Description**: Application logs, categories, user configs (prompts).
- **Business Domain**: IT.
- **Sensitivity**: Restricted.
- **Usage Purpose**: Assist in application processes.
- **Update Frequency**: Daily.
- **Source**: Others (local).
- **CDE Status**: False (no external reporting/publishing/critical processes).

## AI Impact Assessment
### Level-of-Impact: Low
- No high-impact criteria met (e.g., no public scrutiny, autonomy in complex environments, sensitive PII, systemic monitoring).
- Endorsed by: D(IT)(BSA) - YU Chi-hong, Calvin (Date: 46034, approx. Jan 2026).

### Detailed Assessment (Key Excerpts)
- **Purpose**: Streamline workflows, reduce human input, improve efficiency.
- **Stakeholders**: IT teams, management; benefits outweigh risks via local processing.
- **Data Handling**: No PII; inputs anonymized; no large-scale processing.
- **Risks & Mitigations**: Low risk; human oversight for outputs; logs for auditability. No regulatory escalations needed.
- **Ethical Alignment**: Adheres to HKMA's Ethical AI Principles (fairness, transparency, accountability).
- **Stages**: Assessed across planning, development, deployment, monitoring; self-assessment + PAT review.

## Security Report
- **Scan Date**: 2025-12-05.
- **Metrics**: 14 issues (12 high-confidence, 2 medium; 4 high-severity, 2 medium, 8 low).
- **Key Findings**:
  - High-Severity (B501): Requests with verify=False (SSL checks disabled) in MaaS client (lines 292, 346).
  - Medium-Severity (B104): Binding to '0.0.0.0' (all interfaces) in main.py (lines 274, 302).
  - Low-Severity (B110): Try-except-pass patterns (e.g., main.py line 255; session_service.py lines 60, 92).
  - Low-Severity (B105): Hardcoded passwords in IMAP client (lines 99, 103, 107, 111, 115).
- **Recommendations**: Enable SSL verification, use specific IPs for binding, handle exceptions properly, avoid hardcoded credentials.
- **Top LLM Threats Addressed**: Includes prompt injection mitigations, data poisoning prevention, supply chain checks, excessive agency limits, sensitive info disclosure guards, hallucination oversight, and rate limiting.

## Roadmap and Future Plans
- **Sprint 3 Achievements**: Roadshows, SLM feasibility (testing safety, accuracy, memory; best model identified).
- **Next Sprint**: Story development, TPG delivery for feedback.
- **Future Enhancements**: Workflow integration (custom/templates), SLM integration, reply drafts, third-party approvals, broader app connections (e.g., Jira, SharePoint).
- **Showcases/Roadshows**: Presented in AS2 Technology Showcase (Dec 2025) and App Team Roadshow; focus on live demos, peer analysis, and Q&A.

## References
- Sprint 3 Presentation (Sprint 3_B.pptx).
- AI Impact Assessment (Excel file).
- Metadata Template (Excel file).
- ARB Presentation (Spark_ARB_v1.1.with comments.pptx).
- Data Governance Review (Spark_Data Governance Review Template.pptx).
- Security Report (security-report.json).
- Roadshow Presentation (SPARK_Roadshow_App_Team.pptx).
- AS2 Showcase (SPARK_AS2_Showcase.pptx).

This knowledge base serves as a centralized reference for SPARK development, usage, and governance. For updates or clarifications, contact the SPARK Team.