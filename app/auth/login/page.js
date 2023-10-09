import { Form } from '@mantine/form';
import { TextInput, InputLabel, Title, Button } from '@mantine/core';
import { SubmitButton } from '../../../components/SubmitButton.js';

import { redirect } from 'next/navigation';
import { revalidateTag } from 'next/cache';

export const submit = async () => {
  const id = await login();
  redirect(`/post/${id}`); // Navigate to new route
};

export default function Page() {
  async function create(formData) {
    'use server';

    console.log('create');
    // mutate data
    // revalidate cache
  }

  return (
    <form action={create}>
      <Title order={3}>Sign In</Title>
      <TextInput
        label="Email"
        placeholder="Enter your email"
        required
        type="email"
        autoComplete="off"
      />
      <TextInput
        label="Password"
        placeholder="Enter your password"
        required
        type="password"
        autoComplete="off"
      />
      <SubmitButton />
    </form>
  );
}
