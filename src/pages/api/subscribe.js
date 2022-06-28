import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: '',
  server: 'us18',
});

export default async (req, res) => {
  const { email, firstName, lastName, message, company, phone, projectType } =
    req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await mailchimp.lists.addListMember('d292c382e0', {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        Message: message,
        Company: company,
        PHONE: phone,
        ProjectType: projectType,
      },
    });

    return res.status(201).json({ error: 'Success' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
