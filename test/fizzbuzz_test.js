
const FizzBuzz = artifacts.require("FizzBuzz"); 

contract("FizzBuzz", (accounts) => {
  
    it("has been deployed successfully", async () => {
      const instance = await FizzBuzz.deployed();
      assert(instance, "contract was not deployed");
    });

    it("testing fizzbuzz function'", async () => {
        const instance = await FizzBuzz.deployed();

        // using .call() style invocation so we can get the return value back
        let result1 = await instance.fizzbuzz.call(2);
        assert.equal(result1, "Fizz", "divisible by 2 should be Fizz");

        let result2 = await instance.fizzbuzz.call(3);
        assert.equal(result2, "Buzz", "divisible by 3 should be Buzz");

        let result3 = await instance.fizzbuzz.call(6);
        assert.equal(result3, "FizzBuzz", "divisibe by both 2 and 3 should be FizzBuzz");

        let result4 = await instance.fizzbuzz.call(7);
        assert.equal(result4, "Neither", "expected Neither");

        // invoke without .call so we can persist the state
        await instance.fizzbuzz(11);
        let result5 = await instance.getLast();
        let lastNum = result5[0];
        let lastResult = result5[1];
        let expectedNum = web3.utils.toBN(11);

        console.log("expectedNum: ", expectedNum);
        console.log("lastNum: ", lastNum);

        assert.deepEqual(lastNum, expectedNum, "expected 11");
        assert.equal(lastResult, "Neither", "checking getlast returns expected result");

      });
});


