interface IProps {
  email: string;
  password: string;
}

export const login = ({ email, password }: IProps) => {
  const delay = (0.7 + Math.random() * 2) * 1000;
  return new Promise<string>((resolve, reject) => {
    setTimeout(function () {
      if (password === "password123" && !!email) {
        resolve('logged in');
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, delay);
  });
}
