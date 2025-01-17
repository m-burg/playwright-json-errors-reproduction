import { test, expect } from '@playwright/test';

test('both assertions should be visible in the JSON report', async ({ }) => {
  await expect.soft(5).toBe(6);
  await expect.soft(4).toBe(5);
});

