//Sign-up and sign-in tabs to keep this modular but not overwhelming to finish//

//Authentication tabs-react

import { useState, useRef } from 'react';
import './auth.css'

type TabId = 'sign-up' | 'signin'
type AuthTabsProps = {
    initialTab?: TabId;
};
//Authentication logic set-up//
function AuthTabs({ initialTab = 'sign-up'} : AuthTabsProps) {
    const [tab, setTab] = useState<TabId> (initialTab);
    const signupTabRef = useRef<HTMLButtonElement> (null);
    const signinTabRef = useRef<HTMLButtonElement> (null);

    const tabs: { id:TabId; label: string; panelId: string; ref: React.RefObject<HTMLButtonElement | null>} [] = [
        {
            id: 'sign-up',
            label: 'Sign Up',
            panelId: 'panel-signup',
            ref: signupTabRef
        },
        {
            id: 'signin',
            label: 'Sign In',
            panelId: 'panel-signin',
            ref: signinTabRef
        }
    ];

    function changeTab(next: TabId) { setTab(next);}

    function doSignUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        console.log('signup', data);
    }

    function doSignIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        console.log('signin', data);
    }

    return (
        <div className= "authenticate">
            <div className="auth-card">
                {/*Tab buttons*/}
                <div className="tabs" role="tablist" aria-label="Authenication tabs">
                    {tabs.map((t) => (
                        <button
                        key={t.id}
                        role="tab"
                        id={`tab-${t.id}`}
                        ref={t.ref}
                        aria-selected={tab === t.id}
                        aria-controls={t.panelId}
                        tabIndex={tab === t.id ? 0 :-1}
                        className={`tab ${tab === t.id ? 'active' : ''}`}
                        onClick={() => changeTab(t.id)}
                        type='button'
                        >
                            {t.label}
                        </button>
                    ))}
                    <span 
                      className="tab-indicator"
                      aria-hidden="true"
                      style={{ transform: tab === 'sign-up' ? 'translateX(0%)' : 'translateX(100%)' }}
                    />  
                </div>

                <div className="panels">
                    {/*Panel in the sign-up tab*/}
                    <section
                      id="panel-signup"
                      role="tabpanel"
                      aria-labelledby="tab-signup"
                      hidden={tab !== "sign-up"}
                      className= "panel"
                    >
                        <h2 className="visually-hidden">Sign Up</h2>
                        <form onSubmit={doSignUp} noValidate>
                            <label htmlFor='reg-username'>Username</label>
                            <input id='reg-username' name='usesrname' type='text' autoComplete='username' required />

                            <label htmlFor='reg-email'>Email</label>
                            <input id='reg-email' name='email' type='email' autoComplete='email' required />

                            <label htmlFor='reg-password'>Set Password</label>
                            <input id='password' name='password' type='password' autoComplete='new-password' minLength={8} required />

                            <button type='submit'>Create account</button>
                        </form>
                    </section>

                    {/*Panel in the Sign-In Tab*/}
                    <section
                      id="panel-signin"
                      role="tabpanel"
                      aria-labelledby="tab-signin"
                      hidden={tab !== "signin"}
                      className= "panel"
                    >
                        <h2 className="visually-hidden">Sign In</h2>
                        <form onSubmit={doSignIn} noValidate>
                            <label htmlFor='si-id'>Email or Username</label>
                            <input id='si-id' name='identity' type='text' autoComplete='username' required />

                            <label htmlFor='reg-email'>Password</label>
                            <input id='reg-email' name='email' type='password' autoComplete='current-password' required />

                            <div className="row">
                                <a className='link' href="#" onClick={(e) => e.preventDefault()}>Forgot password?</a>
                            </div>
                            <button type='submit'>Sign In</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AuthTabs;

//Some awesome magic to handle the tabs

//Pseudo code:
//for each t in tabs → return a <button> built from its data
//{tabs.map((t) => (
//  <button key={t.id}>{t.label}</button>
//))} - is a loop that build one button per tab object - cleans redundent code blocks.
