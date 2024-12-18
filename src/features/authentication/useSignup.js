import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth.js';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      signupApi({
        email,
        password,
      }),
    onSuccess: () => {
      toast.success('User Successfully created');
    },
  });

  return { signup, isLoading };
}
