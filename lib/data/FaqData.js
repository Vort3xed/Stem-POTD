import Link from 'next/link';

const options = [
  {
    title: <>What do we do?</>,
    body: (
      <>
        Good question.
      </>
    ),
  },
  {
    title: <>Where does computer team get money from?</>,
    body: (
      <>
        We get money from sponsors and from competitions we get prize money from.
      </>
    ),
  },
  {
    title: <>Filler Question</>,
    body: (
      <>
        Check out this link! <br />

        <Link href="/">
          <a>Home</a>
        </Link>
      </>
    ),
  },
  {
    title: <>When will meetings start?</>,
    body: (
      <>
        Soon, hopefully.
      </>
    ),
  },

];

export default options;
