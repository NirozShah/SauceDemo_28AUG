
📂 Project Structure
saucedemo
│── tests/                # Test scripts
│   ├── SauceDemo.spec.ts
│   
│
│── pages/                # Page Object Models
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── CheckoutOverviewPage.ts
│   ├── SortPage.ts
│
│── utils/             # Test data
│   ├── testData.ts
│
│── playwright.config.ts  # Playwright configuration
│── tsconfig.json        # Typescript configuration
│── package.json          # Dependencies and scripts
│── README.md             # Project documentation

⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/NirozShah/SauceDemo/tree/TestNiroz_SauceDemo
cd SauceDemo

2️⃣ Install Dependencies
npx playwright install
npm install

3️⃣ Run Tests
# Run all tests
npx playwright test

# Run specific test
npx playwright test tests/SauceDemo.spec.ts

4️⃣ View Reports
# Open default HTML report
npx playwright show-report

Reporting
Default HTML Reporter: Provided by Playwright

🧑‍💻 Author
👤 Niroz Shah

