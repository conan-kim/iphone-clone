import axios from "axios";

export const getKakaoPaymentUrl = async () => {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const body = {
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: "iPhone 15 Pro",
      quantity: 1,
      total_amount: 10000000,
      tax_free_amount: 0,
      approval_url: `${BASE_URL}/kakao-payment/success`,
      fail_url: `${BASE_URL}/kakao-payment/fail`,
      cancel_url: `${BASE_URL}/kakao-payment/cancel`,
    };
    const res = await axios.post(
      "https://k-learners.com/kakaopay/payment/ready",
      body
    );
    console.log("response", res);
    return res.data;
  } catch (e) {
    console.error("e", e);
  }
};
