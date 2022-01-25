import { FC } from "react";
import { DefaultLayout, Section } from "../../Components";
import { RightSectionContent } from "./Components";

interface SignupViewProps {};

const SignupView: FC<SignupViewProps> = () => {
  return (
    <DefaultLayout>
      <Section className="section-left">
        <div className="signup_left">
          <div className="vercel_logo">
            <svg height="26" viewBox="0 0 284 65" fill="#FFF" aria-label="Vercel Logotype"><path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path></svg>
          </div>
          <div className="vercel_culture_container">
            <div className="vercel_culture_item vercel_culture_svg">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" style={{color: "#FFFFFF"}}><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#0070F3" stroke="#0070F3"></path><path d="M8 11.8571L10.5 14.3572L15.8572 9" fill="none" stroke="var(--geist-stroke)"></path></svg> 
            </div>
            <div className="vercel_culture_item">
              <h3>Instant edge deploys</h3>
              <p className="culture_item_deploy">Push to git and your website is live. Zero configuration required.</p>
            </div>
          </div>
          <div className="vercel_culture_container">
            <div className="vercel_culture_item vercel_culture_svg">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" style={{color: "#FFFFFF"}}><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#0070F3" stroke="#0070F3"></path><path d="M8 11.8571L10.5 14.3572L15.8572 9" fill="none" stroke="var(--geist-stroke)"></path></svg> 
            </div>
            <div className="vercel_culture_item">
              <h3>Collaborate with previews</h3>
              <p className="culture_item_preview">Every pull request gets its own preview URL. Share them to gather feedback or run tests.</p>
            </div>
          </div>
          <div className="vercel_culture_container">
            <div className="vercel_culture_item vercel_culture_svg">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" style={{color: "#FFFFFF"}}><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#0070F3" stroke="#0070F3"></path><path d="M8 11.8571L10.5 14.3572L15.8572 9" fill="none" stroke="var(--geist-stroke)"></path></svg> 
            </div>
            <div className="vercel_culture_item">
              <h3>Turn static to dynamic</h3>
              <p className="culture_item_preview">Generate blazing fast pages and augment them with rich JavaScript that brings your apps alive.</p>
            </div>
          </div>
          <div className="vercel_culture_container">
            <div className="vercel_culture_item vercel_culture_svg">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" style={{color: "#FFFFFF"}}><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#0070F3" stroke="#0070F3"></path><path d="M8 11.8571L10.5 14.3572L15.8572 9" fill="none" stroke="var(--geist-stroke)"></path></svg> 
            </div>
            <div className="vercel_culture_item">
              <h3>Ship directly to the edge</h3>
              <p>Always fast. Always online. Always a hit.</p>
            </div>
          </div>
          <div className="vercel_serving_companies">
            <small>Proudly Serving Amazing Companies</small>
            <div className="vercel_serving_companies_content">
              <div className="vercel_serving_companies_container">
                <div className="vercel_serving_companies_item vercel_serving_companies_icon_width120">
                  <img className="vercel_serving_companies_icon" style={{width: "100px", height: "70px"}} src="assets/images/logos/hashicorp.svg" alt="HashiCorp Logo" />
                </div>
                <div className="vercel_serving_companies_item vercel_serving_companies_icon_width50">
                  <img className="vercel_serving_companies_icon" style={{width: "30px", height: "70px"}} src="assets/images/logos/mcdonalds.svg" alt="McDonald's Logo" />
                </div>
                <div className="vercel_serving_companies_item vercel_serving_companies_icon_width140">
                  <img className="vercel_serving_companies_icon" style={{width: "120px", height: "70px"}} src="assets/images/logos/facebook.svg" alt="Facebook Logo" />
                </div>
                <div className="vercel_serving_companies_item vercel_serving_companies_icon_width200">
                  <img className="vercel_serving_companies_icon" style={{width: "150px", height: "70px"}} src="assets/images/logos/washingtonpost.svg" alt="Washington Post Logo" />
                </div>
              </div>
              <div className="vercel_serving_companies_container">
                <div className="vercel_serving_companies_item vercel_serving_companies_icon_width200x">
                  <img className="vercel_serving_companies_icon" style={{width: "100px", height: "70px"}} src="assets/images/logos/auth0.svg" alt="HashiCorp Logo" />
                </div>
                <div className="vercel_serving_companies_item vercel_serving_companies_icon_width140">
                  <img className="vercel_serving_companies_icon" style={{width: "70px", height: "70px"}} src="assets/images/logos/uber.svg" alt="McDonald's Logo" />
                </div>
                <div className="vercel_serving_companies_item">
                  <img className="vercel_serving_companies_icon" style={{width: "170px", height: "70px"}} src="assets/images/logos/tripadvisor-horizontal.svg" alt="Facebook Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="section-right">
        <RightSectionContent />
      </Section>
    </DefaultLayout>
  )
}

export default SignupView;