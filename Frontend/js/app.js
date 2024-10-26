async function fetchATMData() {
    const apiKey = '832060a218e738937c74b55f9ca4524f'; // Replace with your actual API key
    const response = await fetch(`http://api.nessieisreal.com/enterprise/atms?key=${apiKey}`);
    const data = await response.json();
    const atmList = document.getElementById('atm-list');
    atmList.innerHTML = '';
    data.forEach(atm => {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.innerHTML = `
            <h3>${atm.name || 'ATM Location'}</h3>
            <p>Address: ${atm.address.street_number} ${atm.address.street_name}, ${atm.address.city}</p>
            <p>State: ${atm.address.state}, Zip Code: ${atm.address.zip}</p>
        `;
        atmList.appendChild(listItem);
    });
}

async function fetchAccountData() {
    const apiKey = '832060a218e738937c74b55f9ca4524f'; // Replace with your actual API key
    const response = await fetch(`http://api.nessieisreal.com/enterprise/accounts?key=${apiKey}`);
    const data = await response.json();
    const accountList = document.getElementById('account-list');
    accountList.innerHTML = '';
    data.forEach(account => {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.innerHTML = `
            <h3>Account Nickname: ${account.nickname}</h3>
            <p>Type: ${account.type}</p>
            <p>Balance: $${account.balance}</p>
            <p>Account Number: ${account.account_number}</p>
        `;
        accountList.appendChild(listItem);
    });
}
