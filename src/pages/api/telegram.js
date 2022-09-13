export default async (req, res) => {
  const token = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const { email, firstName, lastName, message, company, phone, projectType } =
    req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  try {
    const result = `
        <strong>New Customer</strong>
        Email Address: ${email}
        Customer: ${firstName} ${lastName}
        Phone: ${phone}
        Message: ${message}
        Project Type: ${projectType}
        Company: ${company}
        `;
    await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${result}&parse_mode=HTML`,
    );

    return res.status(201).json({ error: 'Success' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
