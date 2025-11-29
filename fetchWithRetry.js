/**
 * Mock API function that randomly succeeds or fails
 * Simulates network requests
 */
async function mockApi() {
    return new Promise((resolve, reject) => {
        const succeed = Math.random() > 0.5; // 50% chance of success
        setTimeout(() => {
            if (succeed) {
                resolve("Data fetched successfully!");
            } else {
                reject("API failed");
            }
        }, 500); // simulate network delay of 500ms
    });
}

/**
 * Fetch data with retry mechanism
 * @param {Function} apiFunc - The async function to fetch data
 * @param {number} maxRetries - Maximum number of retries (default 3)
 * @param {number} delayMs - Delay between retries in milliseconds (default 1000ms)
 * @returns {Promise<any>} - Returns fetched data or throws error
 */
async function fetchWithRetry(apiFunc, maxRetries = 3, delayMs = 1000) {
    let attempts = 1; // start from 1

    while (attempts <= maxRetries) {
        try {
            const data = await apiFunc();
            console.log(`Attempt ${attempts}: Success`);
            return data; // success, exit
        } catch (error) {
            console.log(`Attempt ${attempts} failed: ${error}`);

            if (attempts === maxRetries) {
                throw new Error("All retries failed"); // stop after max attempts
            }

            // wait before retrying
            await new Promise(res => setTimeout(res, delayMs));

            attempts++; // increment for next attempt
        }
    }
}


// ---------------- Usage Example ----------------
(async () => {
    try {
        const result = await fetchWithRetry(mockApi, 5, 1000); // 5 retries, 1 second delay
        console.log("Final Result:", result);
    } catch (error) {
        console.error("Error:", error.message);
    }
})();
