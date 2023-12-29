import { assertEquals } from "./test_deps.ts";
import { Client } from "../src/mod.ts";

Deno.test("Client - available functions", () => {
  const client = Client({ merchantSerialNumber: "", subscriptionKey: "" });

  assertEquals(typeof client.auth.getToken, "function");
  assertEquals(typeof client.payment.create, "function");
  assertEquals(typeof client.payment.info, "function");
  assertEquals(typeof client.payment.cancel, "function");
  assertEquals(typeof client.payment.capture, "function");
  assertEquals(typeof client.payment.refund, "function");
  assertEquals(typeof client.payment.forceApprove, "function");
  assertEquals(typeof client.payment.history, "function");
  assertEquals(typeof client.webhook.list, "function");
  assertEquals(typeof client.webhook.register, "function");
  assertEquals(typeof client.webhook.delete, "function");
  assertEquals(typeof client.checkout.create, "function");
  assertEquals(typeof client.checkout.info, "function");
  assertEquals(typeof client.agreement.create, "function");
  assertEquals(typeof client.agreement.info, "function");
  assertEquals(typeof client.agreement.list, "function");
  assertEquals(typeof client.agreement.update, "function");
  assertEquals(typeof client.agreement.forceAccept, "function");
  assertEquals(typeof client.charge.create, "function");
  assertEquals(typeof client.charge.info, "function");
  assertEquals(typeof client.charge.infoById, "function");
  assertEquals(typeof client.charge.list, "function");
  assertEquals(typeof client.charge.cancel, "function");
  assertEquals(typeof client.charge.capture, "function");
  assertEquals(typeof client.charge.refund, "function");
  assertEquals(typeof client.callbackQR.create, "function");
  assertEquals(typeof client.callbackQR.createMobilePayQR, "function");
  assertEquals(typeof client.callbackQR.delete, "function");
  assertEquals(typeof client.callbackQR.info, "function");
  assertEquals(typeof client.callbackQR.list, "function");
});
