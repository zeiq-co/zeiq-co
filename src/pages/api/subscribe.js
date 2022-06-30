import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: '8355818e8cf79bce79efe9d116e83d2f-us10',
  server: 'us10',
});

export default async (req, res) => {
  const { email, firstName, lastName, message, company, phone, projectType } =
    req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await mailchimp.lists.addListMember('63018f3271', {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        MESSAGE: message,
        COMPANY: company,
        PHONE: phone,
        PROJECT_TY: projectType,
      },
    });

    return res.status(201).json({ error: 'Success' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
