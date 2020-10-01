import Link from "next/link";
import SidebarMenu from "components/SidebarMenu";
import SidebarMenuItem from "components/SidebarMenuItem";
import Layout from "components/Layout";

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy"
      background="#F4F7FA"
      hero="How we collect and use your information."
      sidebar={
        <SidebarMenu title="Contents">
          <SidebarMenuItem href="#visitors">Website Visitors</SidebarMenuItem>
          <SidebarMenuItem href="#pii">
            Personally-Identifying Information
          </SidebarMenuItem>
          <SidebarMenuItem href="#statistics">
            Aggregated Statistics
          </SidebarMenuItem>
          <SidebarMenuItem href="#pii2">
            Protection of Personally-Identifying Information
          </SidebarMenuItem>
          <SidebarMenuItem href="#cookies">Cookies</SidebarMenuItem>
          <SidebarMenuItem href="#transfers">
            Business Transfers
          </SidebarMenuItem>
          <SidebarMenuItem href="#changes">
            Privacy Policy Changes
          </SidebarMenuItem>
        </SidebarMenu>
      }
    >
      <p>
        Your privacy is critically important to us. At Outline we have a few
        fundamental principles:
      </p>

      <ul>
        <li>
          We don’t ask you for personal information unless we truly need it.
        </li>
        <li>
          We don’t share your personal information with anyone except to comply
          with the law, develop our products, or protect our rights.
        </li>
        <li>
          We don’t store personal information on our servers unless required for
          the on-going operation of the service.
        </li>
      </ul>

      <p>
        If you have questions about deleting or correcting your personal data
        please{" "}
        <Link href="/contact">
          <a>contact support</a>
        </Link>
        .
      </p>

      <p>
        General Outline, Inc. operates the website getoutline.com – henceforth
        referred to as "Outline". It is Outline’s policy to respect your privacy
        regarding any information we may collect while operating our websites.
      </p>

      <h2 id="visitors">Website Visitors</h2>
      <p>
        Like most website operators, Outline collects non-personally-identifying
        information of the sort that web browsers and servers typically make
        available, such as the browser type, language preference, referring
        site, and the date and time of each visitor request. Outline’s purpose
        in collecting non-personally identifying information is to better
        understand how Outline’s visitors use its website. From time to time,
        Outline may release non-personally-identifying information in the
        aggregate, e.g., by publishing a report on trends in the usage of its
        website. Outline also collects potentially personally-identifying
        information like Internet Protocol (IP) addresses for logged in users.
      </p>

      <h2 id="pii">Gathering of Personally-Identifying Information</h2>
      <p>
        Certain visitors to Outline’s websites choose to interact with Outline
        in ways that require Outline to gather personally-identifying
        information. The amount and type of information that Outline gathers
        depends on the nature of the interaction. For example, we ask visitors
        who sign up to provide an email address or get it with authentication
        partner. Those who engage in transactions with Outline are asked to
        provide additional information, including as necessary the personal and
        financial information required to process those transactions. In each
        case, Outline collects such information only insofar as is necessary or
        appropriate to fulfill the purpose of the visitor’s interaction with
        Outline. Outline does not disclose personally-identifying information
        other than as described below. And visitors can always refuse to supply
        personally-identifying information, with the caveat that it may prevent
        them from engaging in certain website-related activities.
      </p>

      <h2 id="statistics">Aggregated Statistics</h2>
      <p>
        Outline may collect statistics about the behavior of visitors to its
        websites. For instance, Outline may monitor the most popular links or
        screen the links help identify spam. Outline may display this
        information publicly or provide it to others. However, Outline does not
        disclose personally-identifying information other than as described
        below.
      </p>

      <h2 id="pii2">
        Protection of Certain Personally-Identifying Information
      </h2>
      <p>
        Outline discloses potentially personally-identifying and
        personally-identifying information only to those of its employees,
        contractors and affiliated organizations that (i) need to know that
        information in order to process it on Outline’s behalf or to provide
        services available at Outline’s websites, and (ii) that have agreed not
        to disclose it to others. Some of those employees, contractors and
        affiliated organizations may be located outside of your home country; by
        using Outline’s websites, you consent to the transfer of such
        information to them. Outline will not rent or sell potentially
        personally-identifying and personally-identifying information to anyone.
        Other than to its employees, contractors and affiliated organizations,
        as described above, Outline discloses potentially personally-identifying
        and personally-identifying information only in response to a subpoena,
        court order or other governmental request, or when Outline believes in
        good faith that disclosure is reasonably necessary to protect the
        property or rights of Outline, third parties or the public at large.
      </p>
      <p>
        If you are a registered user of an Outline website and have supplied
        your email address, Outline may occasionally send you an email to tell
        you about new features, solicit your feedback, or just keep you up to
        date with what’s going on with Outline and our products. We primarily
        use our various product blogs to communicate this type of information,
        so we expect to keep this type of email to a minimum. If you send us a
        request (for example via a support email or via one of our feedback
        mechanisms), we reserve the right to publish it in order to help us
        clarify or respond to your request or to help us support other users.
        Outline takes all measures reasonably necessary to protect against the
        unauthorized access, use, alteration or destruction of potentially
        personally-identifying and personally-identifying information.
      </p>

      <h2 id="cookies">Cookies</h2>
      <p>
        A cookie is a string of information that a website stores on a visitor’s
        computer, and that the visitor’s browser provides to the website each
        time the visitor returns. Outline uses cookies to help Outline identify
        and track visitors, their usage of Outline website, and their website
        access preferences. Outline visitors who do not wish to have cookies
        placed on their computers should set their browsers to refuse cookies
        before using Outline’s websites, with the drawback that certain features
        of Outline’s websites may not function properly without the aid of
        cookies.
      </p>

      <h2 id="transfers">Business Transfers</h2>
      <p>
        If Outline, or substantially all of its assets, were acquired, or in the
        unlikely event that Outline goes out of business or enters bankruptcy,
        user information would be one of the assets that is transferred or
        acquired by a third party. You acknowledge that such transfers may
        occur, and that any acquirer of Outline may continue to use your
        personal information as set forth in this policy.
      </p>

      <h2 id="changes">Privacy Policy Changes</h2>
      <p>
        Although most changes are likely to be minor, Outline may change its
        Privacy Policy from time to time, and in Outline’s sole discretion.
        Outline encourages visitors to frequently check this page for any
        changes to its Privacy Policy. Your continued use of this site after any
        change in this Privacy Policy will constitute your acceptance of such
        change.
      </p>

      <p>
        CC BY-SA 2.5. Originally forked from{" "}
        <a href="http://www.automattic.com/privacy">Automattic</a> Privacy
        Policy
      </p>
    </Layout>
  );
}
