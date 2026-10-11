import type { Metadata } from "next";
import { PolicyContact, PolicyPage } from "@/components/PolicyPage";
import { CAMPAIGN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Refund policy | Peaktrekker",
  description: "How cancellations, refunds and faulty items work for the Flipper Grill.",
};

export default function RefundsPage() {
  return (
    <PolicyPage title="Refund policy">
      <p>
        The Flipper Grill is sold through{" "}
        <a href={CAMPAIGN_URL} target="_blank" rel="noopener noreferrer">
          our Kickstarter campaign
        </a>
        . This page explains how cancellations, refunds and problems with your order work.
      </p>

      <h2>While the campaign is running</h2>
      <p>
        You can change or cancel your pledge from your Kickstarter account, subject to
        Kickstarter&rsquo;s rules. Your card is only charged if the campaign ends successfully.
      </p>

      <h2>After the campaign ends</h2>
      <p>
        Once your pledge has been collected, Kickstarter cannot refund it on our behalf. If you
        need to cancel after that point, message us and we will work it out with you.
      </p>

      <h2>Damaged or faulty items</h2>
      <p>
        If your Flipper Grill arrives damaged or has a manufacturing fault, message us with your
        order details and a photo of the problem. We will repair it, replace it or refund you.
      </p>

      <PolicyContact />
    </PolicyPage>
  );
}
