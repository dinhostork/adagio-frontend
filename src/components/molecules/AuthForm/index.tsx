import { LoginFormProps } from "./types";
import * as styles from "./styles";
import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";

export const AuthForm: React.FC<LoginFormProps> = ({
  info,
  children,
  forgotPassword,
  register = false,
  submit,
  loading,
  error
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Adagio</h1>
      <h2 className={styles.subtitle}>
        A sinfonia social dos músicos, onde as notas se encontram
      </h2>
      <span className={error? styles.infoTextError : styles.infoText}>{error? error : info}</span>
      <form
        className={styles.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted");
          submit(e);
        }}
      >
        {children}
        {forgotPassword && (
          <span>
            <a href="#" className={styles.forgotPasswordLink}>
              Esqueceu sua senha?
            </a>
          </span>
        )}
        <button className={styles.button} 
        disabled={loading}
        >
          {
            loading && <div >
              <AiOutlineLoading className='animate-spin'/>
            </div>
          }
          {loading ? "Carregando..." : register ? "Cadastrar" : "Entrar"}
        </button>
      </form>
      <hr className={styles.hrLine} />
      {!register && (
        <span className={styles.accountText}>
          Não tem uma conta?{" "}
          <Link href="/auth/register" className={styles.accountLink}>
            Cadastre-se
          </Link>
        </span>
      )}
      {register && (
        <span className={styles.accountText}>
          Já tem uma conta?{" "}
          <Link href="/auth/login" className={styles.accountLink}>
            Entre
          </Link>
        </span>
      )}
    </div>
  );
};
