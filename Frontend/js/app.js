// app.js

function fetchATMData() {
    const atmList = document.getElementById('atm-list');
    atmList.innerHTML = 'Loading...';

    fetch('http://api.nessieisreal.com/enterprise/locations?key=your_api_key')
        .then(response => response.json())
        .then(data => {
            atmList.innerHTML = '';
            data.forEach(atm => {
                const listItem = document.createElement('div');
                listItem.classList.add('list-item');
                listItem.textContent = `ATM Location: ${atm.name} - ${atm.address}`;
                atmList.appendChild(listItem);
            });
        })
        .catch(error => {
            atmList.innerHTML = 'Error loading ATM data.';
            console.error(error);
        });
}

function fetchAccountData() {
    const accountList = document.getElementById('account-list');
    accountList.innerHTML = 'Loading...';

    fetch('http://api.nessieisreal.com/accounts?key=your_api_key')
        .then(response => response.json())
        .then(data => {
            accountList.innerHTML = '';
            data.forEach(account => {
                const listItem = document.createElement('div');
                listItem.classList.add('list-item');
                listItem.textContent = `Account: ${account.nickname} - Balance: $${account.balance}`;
                accountList.appendChild(listItem);
            });
        })
        .catch(error => {
            accountList.innerHTML = 'Error loading accounts.';
            console.error(error);
        });
}
