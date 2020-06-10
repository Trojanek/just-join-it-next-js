import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const offers = await fetch('https://justjoin.it/api/offers');
  const json = await offers.json();
  res.statusCode = 200;
  res.json(json.splice(0, 25));
};

export default handler;
