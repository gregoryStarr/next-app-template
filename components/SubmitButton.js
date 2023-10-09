'use client';

import { Button } from '@mantine/core';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      Submit
    </Button>
  );
}
