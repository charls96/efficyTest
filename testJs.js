const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: "1. Initial Contact",
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: "2. Demonstration",
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: "3. Proposal",
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: "4. Negotiation",
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: "5. Order",
    SUCCESS: 100,
  },
];

const Module = class {
  constructor() {}
  start() {
    // Start modifying the form elements here!
    // You are allowed to add extra methods and properties to this class
    const select = document.getElementsByName("status")[0];

    //Load the <select> options with the contents of the global oppoStatus array.
    oppoStatus.map((oppoStatus) => {
      const option = document.createElement("option");
      option.value = oppoStatus.STATUS;
      option.innerHTML = oppoStatus.STATUS;
      select.appendChild(option);
    });
  }
};

const main = new Module();
main.start();
