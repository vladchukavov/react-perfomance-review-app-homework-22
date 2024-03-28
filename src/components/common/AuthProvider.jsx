import { useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider, githubAuthProvider } from '/src/firebase';

import AppButton from '../forms/AppButton.jsx';
import { Link } from 'react-router-dom';
import HomePage from '../../routes/HomePage.jsx';

const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const startLoginWithGoogle = () => {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        return setUser(user);
      }

      signInWithPopup(auth, googleAuthProvider)
        .then((creds) => setUser(creds.user))
        .catch((error) => alert(error));
    });
  };
  const startLoginWithGitHub = () => {
    signInWithPopup(auth, githubAuthProvider)
      .then((creds) => setUser(creds.user))
      .catch((error) => alert(error));
  };
  const buttons = [
    {
      text: `Sign in with Google`,
      className: `text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2`,
      onClick: startLoginWithGoogle,
    },
    {
      text: `Sign in with Github`,
      className: `text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2`,
      onClick: startLoginWithGitHub,
    },
  ];

  return (
    <>
      {user != null ? (
        <>
          <header
            className={`bg-brand-midnight-green flex items-center justify-between rounded-b-2xl`}
          >
            <div className={`flex flex-col items-end items-center p-2`}>
              <img
                className={`rounded-2xl`}
                src={user.photoURL}
                alt={user.displayName}
                width='50'
                height='50'
              />
              <p className={` font-bold`}>{user.displayName}</p>
            </div>
            <Link
              className={`mb-2 me-2 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800`}
              to={`/login`}
            >
              Logout
            </Link>
          </header>

          <HomePage />
        </>
      ) : (
        <header
          className={`flex h-screen flex-col items-center justify-center`}
        >
          <AppButton buttons={buttons} />
          <Link
            to={`/reg`}
            className={`mb-2 me-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800`}
          >
            Registration
          </Link>
        </header>
      )}
    </>
  );
};

export default AuthProvider;
