import SidebarMenu from "components/SidebarMenu";
import SidebarMenuItem from "components/SidebarMenuItem";
import Hero from "components/Hero";
import Layout from "components/Layout";

export default function Privacy() {
  return (
    <Layout
      title="About"
      background="#F4F7FA"
      hero="The ideas behind Outline."
      sidebar={
        <SidebarMenu title="Contents">
          <SidebarMenuItem href="#goal">Our Goal</SidebarMenuItem>
          <SidebarMenuItem href="#impact">Impact</SidebarMenuItem>
          <SidebarMenuItem href="#oss">Open Source</SidebarMenuItem>
          <SidebarMenuItem href="#company">Company</SidebarMenuItem>
        </SidebarMenu>
      }
    >
      <h2 id="goal">Our Goal</h2>
      <Hero>
        We are building software for the modern workplace, where collaboration
        is valued, ideas don’t sit in silos and speed and quality are paramount.
        The value of Outline comes through sharing knowledge, information, and
        workflows with the rest of your team – we hope you’ll come to think of
        it as a sort of communal long-term memory.
      </Hero>
      <h2 id="impact">Impact</h2>
      <p>
        With Outline we genuinely want to make a difference, this means comped
        accounts for teams working on the things our world needs the most. Right
        now we’re sponsoring teams directly working on Climate Change.
      </p>
      <p>
        We also offer discounts for other non-profits – if your company is in
        either of these categories please reach out to support and we’ll be
        happy to arrange a discount.
      </p>
      <h2 id="oss">Open Source</h2>
      <p>
        Part of increasing impact can be seen in our dedication to open source.
        The vast majority of our codebase is public, and many key components
        such as our editor and website are open source licensed.
      </p>
      <p>
        A <a href="https://github.com/outline/outline">permissively licensed</a>{" "}
        codebase also means it’s possible to run a copy of the service on your
        infrastructure if you wish, and those using the hosted service can get
        peace of mind from knowing they can easily host in-house if they ever
        need to.
      </p>
      <h2 id="company">Company</h2>
      <p>
        The company was founded at the beginning of 2020, building on three
        years of development on the open source project. It is bootstrapped,
        profitable, and not reliant on outside capital to survive.
      </p>
      <p>
        If you have any questions or are in need of product support, don’t
        hesitate to reach out to{" "}
        <a href="mailto:hello@getoutline.com">hello@getoutline.com</a>
      </p>{" "}
    </Layout>
  );
}
