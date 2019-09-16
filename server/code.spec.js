var assert = require('assert');

it("Should have an object that equals reqBody and reqBody Should not equal undefined", function () {
  let reqBody = { title: 'mytitle', task: 'mytask', deadline: 'mydeadline' }
  let title = reqBody.title;
  let task = reqBody.task;
  let deadline = reqBody.deadline;

  assert.notEqual(reqBody, undefined);
  assert.deepEqual(reqBody.title, title);
  assert.deepEqual(reqBody.task, task);
  assert.deepEqual(reqBody.deadline, deadline);
});



it("Should have an not params that equals undefined", function () {
  let reqBody = { title: 'mytitle', task: 'mytask', deadline: 'mydeadline' }
  let title = reqBody.title;
  let task = reqBody.task;
  let deadline = reqBody.deadline;

  assert.notEqual(reqBody.title, undefined);
  assert.notEqual(reqBody.task, undefined);
  assert.notEqual(reqBody.deadline, undefined);
  assert.notEqual(title, undefined);
  assert.notEqual(task, undefined);
  assert.notEqual(deadline, undefined);
});
