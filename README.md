
📂 Project Structure
saucedemo_aug28
│── src/ 
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
│── utils/             # Action test class
│   ├── BasePage.ts
│    
│── testData/             # test data
│   ├── testData.ts
│
│── playwright.config.ts  # Playwright configuration
│── tsconfig.json        # Typescript configuration
│── package.json          # Dependencies and scripts
│── README.md             # Project documentation

⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/NirozShah/SauceDemo_28AUG.git


2️⃣ Install Dependencies
npm install
npx playwright install


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

