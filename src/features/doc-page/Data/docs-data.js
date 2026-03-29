// Mock documentation: top-level field names align with GraphQL Documentation (businesswith APP_DOCUMENTATION).
// API uses content as HTML only; this prototype adds structuredContent for the guide-style DocDetails UI.
// Plain JavaScript (no TypeScript).

// Categories: `category` must match API strings; chips are derived from data (see documentationCategoriesFromDocs).

export const docsData = [
  {
    id: '1',
    slug: 'quick-start-guide',
    title: 'Quick Start Guide',
    description: 'Get up and running with BusinessWith in under 5 minutes',
    category: 'Core',
    published: true,
    updatedAt: '2026-03-20T12:00:00.000Z',
    pageRoute: '/',
    updatedByUser: { id: 'mock-user-1', name: 'Documentation Team' },
    mediaAssets: [],
    content: '',
    structuredContent: {
      context: 'BusinessWith is a comprehensive platform designed to streamline your business operations, from customer management to analytics. This guide will help you set up your account and understand the core features.',
      problem: 'Many businesses struggle with fragmented tools and workflows. BusinessWith solves this by providing an integrated solution that brings all your business processes into one place.',
      steps: [
        {
          title: 'Create your account',
          description: 'Sign up for BusinessWith using your work email. You\'ll receive a confirmation email within minutes.',
          code: '// Example API call\nfetch("https://api.businesswith.com/v1/auth/signup", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({\n    email: "user@company.com",\n    password: "securePassword123"\n  })\n})'
        },
        {
          title: 'Configure your workspace',
          description: 'Set up your team workspace by adding team members and customizing settings to match your business needs.',
        },
        {
          title: 'Import your data',
          description: 'Connect your existing tools or import data via CSV. Our import wizard guides you through the process.',
          code: 'const importData = {\n  source: "csv",\n  file: data.csv,\n  mapping: {\n    "Name": "customer_name",\n    "Email": "customer_email"\n  }\n}'
        },
        {
          title: 'Invite your team',
          description: 'Add team members and assign roles. Each member will receive an invitation email.',
        }
      ],
      realCase: 'TechCorp implemented BusinessWith and reduced their onboarding time from 2 days to 3 hours. They consolidated 5 different tools into one platform, saving $2,400/month in subscriptions.',
      bestPractices: [
        'Start with a small team pilot before company-wide rollout',
        'Use custom fields to capture business-specific data',
        'Set up automated workflows early to maximize efficiency',
        'Regular data backups ensure you never lose critical information'
      ],
      checklist: [
        'Account created and email verified',
        'Workspace configured with company branding',
        'Initial data imported successfully',
        'Team members invited and onboarded',
        'First automation workflow created'
      ],
      sections: [
        { id: 'context', title: 'What is BusinessWith?', level: 2 },
        { id: 'problem', title: 'Problem we solve', level: 2 },
        { id: 'steps', title: 'Step-by-step setup', level: 2 },
        { id: 'step-1', title: 'Create your account', level: 3 },
        { id: 'step-2', title: 'Configure your workspace', level: 3 },
        { id: 'step-3', title: 'Import your data', level: 3 },
        { id: 'step-4', title: 'Invite your team', level: 3 },
        { id: 'real-case', title: 'Real-world example', level: 2 },
        { id: 'best-practices', title: 'Best practices', level: 2 },
        { id: 'checklist', title: 'Setup checklist', level: 2 },
      ]
    }
  },
  {
    id: '2',
    slug: 'api-authentication',
    title: 'API Authentication',
    description: 'Learn how to authenticate your API requests securely',
    category: 'Systems & Providers',
    published: true,
    updatedAt: '2026-03-22T12:00:00.000Z',
    pageRoute: '/integration-settings',
    updatedByUser: { id: 'mock-user-1', name: 'Documentation Team' },
    mediaAssets: [],
    content: '',
    structuredContent: {
      context: 'The BusinessWith API uses OAuth 2.0 for secure authentication. This ensures your data remains protected while allowing seamless integration with third-party applications.',
      problem: 'Insecure API access can lead to data breaches and unauthorized access. Our authentication system provides enterprise-grade security while maintaining ease of use.',
      steps: [
        {
          title: 'Generate API credentials',
          description: 'Navigate to Settings > API Keys and create a new API key pair.',
          code: 'const credentials = {\n  client_id: "your_client_id",\n  client_secret: "your_client_secret"\n}'
        },
        {
          title: 'Request an access token',
          description: 'Use your credentials to obtain an access token via the OAuth endpoint.',
          code: 'const response = await fetch("https://api.businesswith.com/oauth/token", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({\n    grant_type: "client_credentials",\n    client_id: credentials.client_id,\n    client_secret: credentials.client_secret\n  })\n});\n\nconst { access_token } = await response.json();'
        },
        {
          title: 'Make authenticated requests',
          description: 'Include the access token in the Authorization header of your API requests.',
          code: 'fetch("https://api.businesswith.com/v1/customers", {\n  headers: {\n    "Authorization": `Bearer ${access_token}`,\n    "Content-Type": "application/json"\n  }\n})'
        }
      ],
      realCase: 'FinanceApp integrated with BusinessWith API to sync customer data in real-time. They process over 10,000 API calls daily with 99.9% uptime.',
      bestPractices: [
        'Store API credentials securely using environment variables',
        'Rotate your API keys every 90 days',
        'Use different API keys for development and production',
        'Implement rate limiting on your side to avoid hitting API limits',
        'Monitor API usage through our dashboard'
      ],
      checklist: [
        'API credentials generated and stored securely',
        'Access token successfully obtained',
        'First authenticated API call completed',
        'Error handling implemented',
        'Rate limiting configured'
      ],
      sections: [
        { id: 'context', title: 'Authentication overview', level: 2 },
        { id: 'problem', title: 'Security considerations', level: 2 },
        { id: 'steps', title: 'Implementation guide', level: 2 },
        { id: 'step-1', title: 'Generate API credentials', level: 3 },
        { id: 'step-2', title: 'Request an access token', level: 3 },
        { id: 'step-3', title: 'Make authenticated requests', level: 3 },
        { id: 'real-case', title: 'Success story', level: 2 },
        { id: 'best-practices', title: 'Security best practices', level: 2 },
        { id: 'checklist', title: 'Implementation checklist', level: 2 },
      ]
    }
  },
  {
    id: '3',
    slug: 'webhook-integration',
    title: 'Webhook Integration',
    description: 'Set up webhooks to receive real-time events from BusinessWith',
    category: 'Systems & Providers',
    published: true,
    updatedAt: '2026-03-24T12:00:00.000Z',
    pageRoute: '/integration-settings',
    updatedByUser: { id: 'mock-user-1', name: 'Documentation Team' },
    mediaAssets: [],
    content: '',
    structuredContent: {
      context: 'Webhooks allow your application to receive real-time notifications when events occur in BusinessWith. Instead of polling our API repeatedly, webhooks push data to your server instantly when changes happen.',
      problem: 'Polling APIs for updates is inefficient and can cause delays in detecting important events. Webhooks solve this by providing instant, event-driven notifications that keep your systems in perfect sync.',
      steps: [
        {
          title: 'Create a webhook endpoint',
          description: 'Set up an HTTPS endpoint on your server to receive webhook payloads. The endpoint must return a 200 status code to confirm receipt.',
          code: '// Express.js example\nconst express = require("express");\nconst app = express();\n\napp.post("/webhooks/businesswith", express.json(), (req, res) => {\n  const event = req.body;\n  console.log("Received webhook:", event);\n  \n  // Process the event\n  handleWebhookEvent(event);\n  \n  res.status(200).send("OK");\n});'
        },
        {
          title: 'Register your webhook URL',
          description: 'Navigate to Settings > Webhooks in your BusinessWith dashboard and add your endpoint URL. Select the events you want to subscribe to.',
          code: '// Or register via API\nfetch("https://api.businesswith.com/v1/webhooks", {\n  method: "POST",\n  headers: {\n    "Authorization": "Bearer YOUR_API_KEY",\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({\n    url: "https://yourapp.com/webhooks/businesswith",\n    events: ["customer.created", "order.updated"]\n  })\n});'
        },
        {
          title: 'Verify webhook signatures',
          description: 'Always verify that webhook requests are genuinely from BusinessWith by validating the signature in the X-Webhook-Signature header.',
          code: 'const crypto = require("crypto");\n\nfunction verifyWebhookSignature(payload, signature, secret) {\n  const hash = crypto\n    .createHmac("sha256", secret)\n    .update(JSON.stringify(payload))\n    .digest("hex");\n  \n  return hash === signature;\n}\n\n// In your endpoint\nconst isValid = verifyWebhookSignature(\n  req.body,\n  req.headers["x-webhook-signature"],\n  process.env.WEBHOOK_SECRET\n);'
        },
        {
          title: 'Handle events',
          description: 'Process different event types based on your business logic. Implement retry logic for failed processing.',
          code: 'function handleWebhookEvent(event) {\n  switch(event.type) {\n    case "customer.created":\n      syncNewCustomer(event.data);\n      break;\n    case "order.updated":\n      updateOrderStatus(event.data);\n      break;\n    default:\n      console.log("Unhandled event type:", event.type);\n  }\n}'
        }
      ],
      realCase: 'E-commerce platform ShopFlow uses webhooks to sync order updates in real-time. They reduced order processing delays from 5 minutes to under 2 seconds, improving customer satisfaction by 35%.',
      bestPractices: [
        'Always return a 200 status immediately, then process events asynchronously',
        'Implement idempotency to handle duplicate webhook deliveries',
        'Use webhook signatures to verify authenticity',
        'Set up monitoring and alerting for webhook failures',
        'Keep a log of all received webhooks for debugging',
        'Use a queue system for processing high-volume webhooks'
      ],
      checklist: [
        'Webhook endpoint created and deployed',
        'HTTPS certificate valid and properly configured',
        'Webhook URL registered in BusinessWith dashboard',
        'Signature verification implemented',
        'Event handling logic tested',
        'Error handling and retry mechanism in place'
      ],
      sections: [
        { id: 'context', title: 'What are webhooks?', level: 2 },
        { id: 'problem', title: 'Why use webhooks?', level: 2 },
        { id: 'steps', title: 'Setup guide', level: 2 },
        { id: 'step-1', title: 'Create a webhook endpoint', level: 3 },
        { id: 'step-2', title: 'Register your webhook URL', level: 3 },
        { id: 'step-3', title: 'Verify webhook signatures', level: 3 },
        { id: 'step-4', title: 'Handle events', level: 3 },
        { id: 'real-case', title: 'Success story', level: 2 },
        { id: 'best-practices', title: 'Implementation best practices', level: 2 },
        { id: 'checklist', title: 'Setup checklist', level: 2 },
      ]
    }
  },
  {
    id: '4',
    slug: 'custom-workflows',
    title: 'Building Custom Workflows',
    description: 'Automate your business processes with powerful workflow automation',
    category: 'Guide Leads',
    published: true,
    updatedAt: '2026-03-18T12:00:00.000Z',
    pageRoute: '/leads-guide',
    updatedByUser: { id: 'mock-user-1', name: 'Documentation Team' },
    mediaAssets: [],
    content: '',
    structuredContent: {
      context: 'Custom workflows in BusinessWith allow you to automate repetitive tasks and create sophisticated business processes without writing code. From simple email notifications to complex multi-step approval chains, workflows save time and reduce errors.',
      problem: 'Manual processes are time-consuming, error-prone, and difficult to scale. Employees waste hours on repetitive tasks that could be automated, leading to decreased productivity and increased operational costs.',
      steps: [
        {
          title: 'Define your trigger',
          description: 'Choose what event will start your workflow. This could be a new customer signup, form submission, status change, or scheduled time.',
        },
        {
          title: 'Add conditions',
          description: 'Set up if/then logic to control when actions execute. Filter based on field values, dates, or custom criteria.',
          code: '// Example workflow configuration\n{\n  "trigger": "customer.created",\n  "conditions": [\n    {\n      "field": "customer.plan",\n      "operator": "equals",\n      "value": "enterprise"\n    }\n  ],\n  "actions": []\n}'
        },
        {
          title: 'Configure actions',
          description: 'Define what happens when your workflow runs: send emails, update records, create tasks, call webhooks, or trigger other workflows.',
          code: '{\n  "actions": [\n    {\n      "type": "send_email",\n      "to": "sales@company.com",\n      "subject": "New Enterprise Customer",\n      "template": "enterprise_notification"\n    },\n    {\n      "type": "create_task",\n      "assignee": "account_manager",\n      "title": "Onboard {{customer.name}}",\n      "due_date": "+3 days"\n    }\n  ]\n}'
        },
        {
          title: 'Test and activate',
          description: 'Use the workflow tester to verify everything works as expected before activating it in production.',
        }
      ],
      realCase: 'Marketing agency BrandBoost automated their client onboarding with workflows. What used to take 2 hours of manual work now happens instantly, allowing them to onboard 3x more clients with the same team.',
      bestPractices: [
        'Start simple and add complexity gradually',
        'Use descriptive names for workflows to make them easy to find',
        'Test workflows thoroughly before activating',
        'Monitor workflow execution logs regularly',
        'Set up notifications for workflow failures',
        'Document complex workflows for your team',
        'Use workflow templates for common processes'
      ],
      checklist: [
        'Workflow trigger defined and configured',
        'Conditions set up correctly',
        'All actions configured and tested',
        'Error handling configured',
        'Workflow tested with real data',
        'Team trained on monitoring workflow activity'
      ],
      sections: [
        { id: 'context', title: 'Workflow automation overview', level: 2 },
        { id: 'problem', title: 'Problems with manual processes', level: 2 },
        { id: 'steps', title: 'Building your first workflow', level: 2 },
        { id: 'step-1', title: 'Define your trigger', level: 3 },
        { id: 'step-2', title: 'Add conditions', level: 3 },
        { id: 'step-3', title: 'Configure actions', level: 3 },
        { id: 'step-4', title: 'Test and activate', level: 3 },
        { id: 'real-case', title: 'Real-world success', level: 2 },
        { id: 'best-practices', title: 'Workflow best practices', level: 2 },
        { id: 'checklist', title: 'Implementation checklist', level: 2 },
      ]
    }
  },
  {
    id: '5',
    slug: 'data-export',
    title: 'Data Export & Backup',
    description: 'Export your data in multiple formats for backup and analysis',
    category: 'Vendor Settings',
    published: true,
    updatedAt: '2026-03-15T12:00:00.000Z',
    pageRoute: '/settings',
    updatedByUser: { id: 'mock-user-1', name: 'Documentation Team' },
    mediaAssets: [],
    content: '',
    structuredContent: {
      context: 'BusinessWith provides flexible data export options to ensure you always have access to your business data. Export to CSV, JSON, or Excel formats for backup, analysis, or migration purposes.',
      problem: 'Being locked into a platform without easy data access is risky. You need the ability to export your data for backups, compliance, reporting, and business intelligence.',
      steps: [
        {
          title: 'Choose export scope',
          description: 'Decide what data to export: all records, specific categories, date ranges, or filtered results.',
        },
        {
          title: 'Select export format',
          description: 'Choose the format that best suits your needs: CSV for spreadsheets, JSON for developers, or Excel for advanced formatting.',
          code: '// API export example\nfetch("https://api.businesswith.com/v1/export", {\n  method: "POST",\n  headers: {\n    "Authorization": "Bearer YOUR_API_KEY",\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({\n    type: "customers",\n    format: "json",\n    filters: {\n      created_after: "2026-01-01"\n    }\n  })\n});'
        },
        {
          title: 'Configure export options',
          description: 'Set additional options like field selection, encoding, and whether to include related data.',
          code: '{\n  "fields": ["name", "email", "created_at", "status"],\n  "include_relations": true,\n  "encoding": "UTF-8",\n  "delimiter": ","\n}'
        },
        {
          title: 'Download and verify',
          description: 'Once the export is complete, download the file and verify that all expected data is present and correctly formatted.',
        }
      ],
      realCase: 'Finance company SecureCorp exports all transaction data daily for compliance purposes. Automated exports ensure they always have audit-ready backups without manual intervention.',
      bestPractices: [
        'Schedule automatic backups daily or weekly',
        'Store exported data securely with encryption',
        'Verify export integrity after each backup',
        'Keep exports for required retention periods',
        'Test restore procedures periodically',
        'Document your export and backup processes'
      ],
      checklist: [
        'Export scope defined',
        'Format selected based on use case',
        'Export completed successfully',
        'Data verified for completeness',
        'Backup stored securely',
        'Automated export schedule configured (if needed)'
      ],
      sections: [
        { id: 'context', title: 'Data export capabilities', level: 2 },
        { id: 'problem', title: 'Why export your data?', level: 2 },
        { id: 'steps', title: 'Export process', level: 2 },
        { id: 'step-1', title: 'Choose export scope', level: 3 },
        { id: 'step-2', title: 'Select export format', level: 3 },
        { id: 'step-3', title: 'Configure export options', level: 3 },
        { id: 'step-4', title: 'Download and verify', level: 3 },
        { id: 'real-case', title: 'Compliance use case', level: 2 },
        { id: 'best-practices', title: 'Backup best practices', level: 2 },
        { id: 'checklist', title: 'Export checklist', level: 2 },
      ]
    }
  },
  {
    id: '6',
    slug: 'troubleshooting-common-errors',
    title: 'Troubleshooting Common Errors',
    description: 'Solutions to frequently encountered issues',
    category: 'Core',
    published: true,
    updatedAt: '2026-03-10T12:00:00.000Z',
    pageRoute: '/settings',
    updatedByUser: { id: 'mock-user-1', name: 'Documentation Team' },
    mediaAssets: [],
    content: '',
    structuredContent: {
      context: 'This guide covers the most common errors users encounter in BusinessWith and provides step-by-step solutions. Most issues can be resolved quickly with the right troubleshooting approach.',
      problem: 'Technical errors can be frustrating and time-consuming. Having quick access to solutions helps you resolve issues faster and minimize downtime.',
      steps: [
        {
          title: 'Identify the error',
          description: 'Note the exact error message, error code, and when it occurs. Check the browser console for additional details.',
          code: '// Open browser console\n// Chrome/Edge: F12 or Ctrl+Shift+I\n// Firefox: F12 or Ctrl+Shift+K\n// Safari: Cmd+Option+I\n\n// Look for errors in red\nconsole.error("Error details here");'
        },
        {
          title: 'Check system status',
          description: 'Visit status.businesswith.com to confirm all services are operational. Maintenance or outages may affect functionality.',
        },
        {
          title: 'Review recent changes',
          description: 'Consider if recent configuration changes, integrations, or updates might have caused the issue.',
        },
        {
          title: 'Try common solutions',
          description: 'Clear browser cache, disable browser extensions, try incognito mode, or test in a different browser.',
          code: '// Common fixes\n- Clear cache: Ctrl+Shift+Delete\n- Hard refresh: Ctrl+Shift+R\n- Disable extensions\n- Check network connectivity'
        },
        {
          title: 'Contact support',
          description: 'If the issue persists, contact support with error details, screenshots, and steps to reproduce.',
        }
      ],
      realCase: 'UserTech reduced their support tickets by 60% by creating an internal knowledge base based on this troubleshooting guide. Team members can now solve most issues independently.',
      bestPractices: [
        'Document errors and solutions for your team',
        'Take screenshots of error messages',
        'Test in different browsers to isolate browser-specific issues',
        'Keep browser and operating system updated',
        'Maintain a testing environment separate from production',
        'Review error logs regularly to catch issues early'
      ],
      checklist: [
        'Error message documented with details',
        'System status checked',
        'Browser cache cleared',
        'Issue reproduced in different browser',
        'Recent changes reviewed',
        'Support ticket created (if needed)'
      ],
      sections: [
        { id: 'context', title: 'Troubleshooting overview', level: 2 },
        { id: 'problem', title: 'Common error scenarios', level: 2 },
        { id: 'steps', title: 'Troubleshooting process', level: 2 },
        { id: 'step-1', title: 'Identify the error', level: 3 },
        { id: 'step-2', title: 'Check system status', level: 3 },
        { id: 'step-3', title: 'Review recent changes', level: 3 },
        { id: 'step-4', title: 'Try common solutions', level: 3 },
        { id: 'step-5', title: 'Contact support', level: 3 },
        { id: 'real-case', title: 'Reducing support load', level: 2 },
        { id: 'best-practices', title: 'Proactive troubleshooting', level: 2 },
        { id: 'checklist', title: 'Troubleshooting checklist', level: 2 },
      ]
    }
  },
  {
    id: '7',
    slug: 'rate-limits',
    title: 'Understanding Rate Limits',
    description: 'Learn about API rate limits and how to optimize your requests',
    category: 'Systems & Providers',
    published: true,
    updatedAt: '2026-03-12T12:00:00.000Z',
    pageRoute: '/integration-settings',
    updatedByUser: { id: 'mock-user-1', name: 'Documentation Team' },
    mediaAssets: [],
    content: '',
    structuredContent: {
      context: 'Rate limits protect our API infrastructure and ensure fair usage for all customers. Understanding and respecting these limits helps you build reliable integrations that work smoothly.',
      problem: 'Exceeding rate limits can cause your API requests to fail, disrupting your application. Proper rate limit management ensures consistent, reliable API access.',
      steps: [
        {
          title: 'Check your rate limits',
          description: 'Different plans have different rate limits. Check your current limits in the API dashboard.',
          code: '// Rate limit headers in API response\nX-RateLimit-Limit: 1000\nX-RateLimit-Remaining: 999\nX-RateLimit-Reset: 1648742400'
        },
        {
          title: 'Implement rate limit handling',
          description: 'Monitor rate limit headers and implement exponential backoff when approaching limits.',
          code: 'async function apiCallWithRateLimitHandling(url) {\n  const response = await fetch(url, {\n    headers: { "Authorization": "Bearer YOUR_TOKEN" }\n  });\n  \n  const remaining = response.headers.get("X-RateLimit-Remaining");\n  const reset = response.headers.get("X-RateLimit-Reset");\n  \n  if (remaining < 10) {\n    const waitTime = reset * 1000 - Date.now();\n    await new Promise(resolve => setTimeout(resolve, waitTime));\n  }\n  \n  return response.json();\n}'
        },
        {
          title: 'Optimize your requests',
          description: 'Use batch endpoints, caching, and webhooks to reduce API calls.',
          code: '// Batch multiple operations\nfetch("https://api.businesswith.com/v1/batch", {\n  method: "POST",\n  headers: {\n    "Authorization": "Bearer YOUR_TOKEN",\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({\n    operations: [\n      { method: "GET", path: "/customers/123" },\n      { method: "GET", path: "/customers/456" },\n      { method: "GET", path: "/customers/789" }\n    ]\n  })\n});'
        }
      ],
      realCase: 'DataSync Inc. was hitting rate limits during peak hours. By implementing request batching and caching, they reduced API calls by 70% while improving response times.',
      bestPractices: [
        'Always check rate limit headers in responses',
        'Implement exponential backoff for retries',
        'Use webhooks instead of polling when possible',
        'Cache frequently accessed data',
        'Batch requests when supported',
        'Monitor your API usage regularly',
        'Upgrade your plan if consistently hitting limits'
      ],
      checklist: [
        'Current rate limits identified',
        'Rate limit headers monitored in code',
        'Retry logic with backoff implemented',
        'Caching strategy in place',
        'Webhook subscriptions set up (where applicable)',
        'API usage monitoring configured'
      ],
      sections: [
        { id: 'context', title: 'What are rate limits?', level: 2 },
        { id: 'problem', title: 'Impact of exceeding limits', level: 2 },
        { id: 'steps', title: 'Managing rate limits', level: 2 },
        { id: 'step-1', title: 'Check your rate limits', level: 3 },
        { id: 'step-2', title: 'Implement rate limit handling', level: 3 },
        { id: 'step-3', title: 'Optimize your requests', level: 3 },
        { id: 'real-case', title: 'Optimization success', level: 2 },
        { id: 'best-practices', title: 'Rate limit best practices', level: 2 },
        { id: 'checklist', title: 'Implementation checklist', level: 2 },
      ]
    }
  },
  {
    id: '8',
    slug: 'advanced-filtering',
    title: 'Advanced Data Filtering',
    description: 'Master complex queries and filtering options',
    category: 'Buying Intent',
    published: true,
    updatedAt: '2026-03-14T12:00:00.000Z',
    pageRoute: '/buying-intent-v2/:systemId',
    updatedByUser: { id: 'mock-user-1', name: 'Documentation Team' },
    mediaAssets: [],
    content: '',
    structuredContent: {
      context: 'Advanced filtering capabilities in BusinessWith allow you to build sophisticated queries to find exactly the data you need. From simple field matching to complex boolean logic, filters help you analyze and segment your business data.',
      problem: 'Finding specific records in large datasets manually is time-consuming and inefficient. Advanced filters enable precise data retrieval for reporting, segmentation, and analysis.',
      steps: [
        {
          title: 'Basic field filters',
          description: 'Start with simple filters on individual fields using operators like equals, contains, greater than, or less than.',
          code: '// Simple filter example\nconst filters = {\n  status: { equals: "active" },\n  created_at: { gte: "2026-01-01" },\n  email: { contains: "@company.com" }\n};'
        },
        {
          title: 'Combine with AND/OR logic',
          description: 'Create complex conditions by combining multiple filters with AND/OR operators.',
          code: '// Complex filter with boolean logic\nconst complexFilter = {\n  AND: [\n    { status: { equals: "active" } },\n    {\n      OR: [\n        { plan: { equals: "enterprise" } },\n        { revenue: { gte: 10000 } }\n      ]\n    }\n  ]\n};'
        },
        {
          title: 'Use nested filters',
          description: 'Filter based on related data using nested object notation.',
          code: '// Filter customers by order data\nconst nestedFilter = {\n  "orders.total": { gte: 1000 },\n  "orders.status": { in: ["completed", "shipped"] },\n  "orders.created_at": { gte: "2026-01-01" }\n};'
        },
        {
          title: 'Save and reuse filters',
          description: 'Save frequently used filter combinations as templates for quick access.',
          code: '// Save filter as template\nfetch("https://api.businesswith.com/v1/filter-templates", {\n  method: "POST",\n  headers: {\n    "Authorization": "Bearer YOUR_TOKEN",\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({\n    name: "High Value Customers",\n    filters: complexFilter\n  })\n});'
        }
      ],
      realCase: 'Analytics team at GrowthLabs uses advanced filters to segment customers into 15 different cohorts for targeted campaigns. This increased email engagement by 45% and conversion rates by 28%.',
      bestPractices: [
        'Start with simple filters and add complexity gradually',
        'Test filters with small datasets first',
        'Use filter templates for consistency',
        'Combine filters with sorting and pagination',
        'Document complex filter logic for your team',
        'Monitor query performance with large datasets',
        'Use indexes on frequently filtered fields'
      ],
      checklist: [
        'Filter requirements defined',
        'Basic filters tested and working',
        'Complex boolean logic verified',
        'Nested filters configured (if needed)',
        'Filter templates created for common queries',
        'Performance tested with production data volumes'
      ],
      sections: [
        { id: 'context', title: 'Filtering capabilities', level: 2 },
        { id: 'problem', title: 'Why use advanced filters?', level: 2 },
        { id: 'steps', title: 'Building advanced filters', level: 2 },
        { id: 'step-1', title: 'Basic field filters', level: 3 },
        { id: 'step-2', title: 'Combine with AND/OR logic', level: 3 },
        { id: 'step-3', title: 'Use nested filters', level: 3 },
        { id: 'step-4', title: 'Save and reuse filters', level: 3 },
        { id: 'real-case', title: 'Segmentation success', level: 2 },
        { id: 'best-practices', title: 'Filtering best practices', level: 2 },
        { id: 'checklist', title: 'Filter implementation checklist', level: 2 },
      ]
    }
  },
];

export const getDocBySlug = (slug) => {
  return docsData.find(doc => doc.slug === slug);
};

export const getDocsByCategory = (categoryId) => {
  return docsData.filter(doc => doc.category === categoryId);
};

export const getFeaturedDocs = () => {
  return docsData.filter((doc) => doc.published).slice(0, 3);
};

export const getRecentDocs = (limit = 4) => {
  return [...docsData]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, limit);
};

export const searchDocs = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return docsData.filter(doc =>
    doc.title.toLowerCase().includes(lowercaseQuery) ||
    doc.description.toLowerCase().includes(lowercaseQuery) ||
    doc.category.toLowerCase().includes(lowercaseQuery)
  );
};