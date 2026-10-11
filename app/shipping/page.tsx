import type { Metadata } from "next";
import Link from "next/link";
import { PolicyContact, PolicyPage } from "@/components/PolicyPage";
import { CAMPAIGN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Shipping policy | Peaktrekker",
  description: "Where the Flipper Grill ships, what it costs and what to expect on delivery.",
};

export default function ShippingPage() {
  return (
    <PolicyPage title="Shipping policy">
      <p>
        The Flipper Grill ships to backers of{" "}
        <a href={CAMPAIGN_URL} target="_blank" rel="noopener noreferrer">
          our Kickstarter campaign
        </a>
        . This page explains what to expect.
      </p>

      <h2>Where we ship and what it costs</h2>
      <p>
        The countries we ship to, the shipping cost and the estimated delivery date are listed on
        the campaign page. You will see the shipping cost for your country before you confirm
        your pledge.
      </p>

      <h2>Updates</h2>
      <p>
        We post progress updates on the campaign page, and we will let you know when your grill is
        on its way.
      </p>

      <h2>Customs and taxes</h2>
      <p>
        Depending on where you live, import duties or taxes may be charged when your order
        arrives. Check the campaign page for what is included in your pledge.
      </p>

      <h2>Changing your address</h2>
      <p>
        Moved since you pledged? Message us before your grill ships and we will update your
        address.
      </p>

      <h2>Lost or damaged in transit</h2>
      <p>
        If your order has not arrived or turns up damaged, message us with your order details and
        we will put it right. See our <Link href="/refunds">refund policy</Link> for more.
      </p>

      <PolicyContact />
    </PolicyPage>
  );
}
