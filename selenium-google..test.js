const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Open the Home page
    await driver.get('http://localhost:3000/');
    // Wait until the page title is "Home"
    await driver.wait(until.titleIs('Home'), 1000);
    // Verify that the page title is "Home"
    const pageTitle = await driver.getTitle();
    console.log(pageTitle === 'Home' ? 'Home page title test passed' : 'Home page title test failed');
    
    // Open the Contact page
    await driver.findElement(By.id('contactLink')).click();
    // Wait until the page title is "Contact Us"
    await driver.wait(until.titleIs('Contact Us'), 1000);
    // Verify that the page title is "Contact Us"
    const contactPageTitle = await driver.getTitle();
    console.log(contactPageTitle === 'Contact Us' ? 'Contact page title test passed' : 'Contact page title test failed');

    // Fill out the form and submit it
    const email = 'example@gmail.com';
    await driver.findElement(By.id('formInput')).sendKeys(email);
    await driver.findElement(By.id('formSubmit')).click();
    // Wait until the form message is displayed
    await driver.wait(until.elementLocated(By.id('formMessage')), 1000);
    // Verify that the form message is correct
    const formMessage = await driver.findElement(By.id('formMessage')).getText();
    console.log(formMessage === `More info coming to ${email}` ? 'Form submission test passed' : 'Form submission test failed');
    
  } finally {
    await driver.quit();
  }
})();
