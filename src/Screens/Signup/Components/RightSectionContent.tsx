import { FC, Fragment } from "react";

interface RightSectionContentProps {

}

export const RightSectionContent: FC<RightSectionContentProps> = () => {
  return <Fragment>
    <div className="signup-right">
      <h1 className="vercel-text signup_title vercel-text-no-margin h1 w-600">
        Join the best 
        <br/>
        frontend teams
      </h1>
      <div>
        <span>
          <div>
            <span>
              <button type="submit" className="custom_github_button button_large button_signup_button button_signup_button_base button_signup_reset" >
                <span className="signup_button_icon">
                  <svg width="20" height="20" viewBox="0 0 14 14" aria-label="github"><path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z" fill="currentColor" fillRule="nonzero"></path></svg>
                </span>
                <span className="signup_button_content">Continue with GitHub</span>
              </button>
            </span>
          </div>
          <div>
            <span>
              <button type="submit" className="custom_gitlab_button button_large button_signup_button button_signup_button_base button_signup_reset" >
                <span className="signup_button_icon">
                  <svg width="20" height="20" viewBox="0 0 24 22" aria-label="gitlab"><path d="M1.279 8.29L.044 12.294c-.117.367 0 .78.325 1.014l11.323 8.23-.009-.012-.03-.039L1.279 8.29zM22.992 13.308a.905.905 0 00.325-1.014L22.085 8.29 11.693 21.52l11.299-8.212z" fill="currentColor"></path><path d="M1.279 8.29l10.374 13.197.03.039.01-.006L22.085 8.29H1.28z" fill="currentColor" opacity="0.4"></path><path d="M15.982 8.29l-4.299 13.236-.004.011.014-.017L22.085 8.29h-6.103zM7.376 8.29H1.279l10.374 13.197L7.376 8.29z" fill="currentColor" opacity="0.6"></path><path d="M18.582.308l-2.6 7.982h6.103L19.48.308c-.133-.41-.764-.41-.897 0zM1.279 8.29L3.88.308c.133-.41.764-.41.897 0l2.6 7.982H1.279z" fill="currentColor" opacity="0.4"></path></svg>
                </span>
                <span className="signup_button_content">Continue with GitLab</span>
              </button>
            </span>
          </div>
          <div>
            <span>
              <button type="submit" className="custom_bitbucket_button button_large button_signup_button button_signup_button_base button_signup_reset" >
                <span className="signup_button_icon">
                  <svg width="20" height="20" viewBox="-2 -2 65 59"><defs><linearGradient x1="104.953%" y1="21.921%" x2="46.569%" y2="75.234%" id="bitbucket-1"><stop stopColor="currentColor" stopOpacity=".4" offset="7%"></stop><stop stopColor="currentColor" offset="100%"></stop></linearGradient></defs><path d="M59.696 18.86h-18.77l-3.15 18.39h-13L9.426 55.47a2.71 2.71 0 001.75.66h40.74a2 2 0 002-1.68l5.78-35.59z" fill="url(#bitbucket-1)" fillRule="nonzero" transform="translate(-.026 .82)"></path><path d="M2 .82a2 2 0 00-2 2.32l8.49 51.54a2.7 2.7 0 00.91 1.61 2.71 2.71 0 001.75.66l15.76-18.88H24.7l-3.47-18.39h38.44l2.7-16.53a2 2 0 00-2-2.32L2 .82z" fill="currentColor" fillRule="nonzero"></path></svg>
                </span>
                <span className="signup_button_content">Continue with BitBucket</span>
              </button>
            </span>
          </div>
          <div className="email_link_text">
            <span className="email_link" tabIndex={0} role="link">Continue with Email →</span>
          </div>
        </span>
      </div>
      <div className="terms_privacy">
        <p className="terms_privacy_text vercel_terms_text">
          By clicking continue, you agree to our &nbsp;
          <a href="/legal/terms" target="_blank" rel="noopener" className="terms_privacy_link">
            Terms of Service&nbsp;
            <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg>
           </a>
          &nbsp;and&nbsp;
          <a href="/legal/privacy" target="_blank" rel="noopener" className="terms_privacy_link">
            Privacy Policy&nbsp;
            <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg>
          </a>
          .
        </p>
      </div>
      <div className="vercel_complex">
        <p className="vercel_terms_text white_color">
          Have a complex company use case?
          <br/>
          <a href="/contact/sales" className="complex_link">Get enterprise-grade assistance</a>
        </p>
      </div>
      <div>
        <hr className="vercel_hr" />
      </div>
      <div className="vercel_account">
        <p className="vercel_terms_text white_color">
          Already have an account?&nbsp;
          <a href="/login" className="complex_link">Log in</a>
        </p>
      </div>
    </div>
  </Fragment>
}