import { FaBrandsGithub } from "solid-icons/fa";
import { SiBuymeacoffee } from "solid-icons/si";

const Footer = () => {
  return (
    <div class='bg-white p-3 flex items-center justify-center gap-4 md:gap-8'>
      <span class='text-xs'>Made by Chad Adams</span>

      <div>
        <div class='flex justify-end gap-2'>
          <a href='https://www.buymeacoffee.com/chadalen' target='_blank' rel='noopener' title='Buy me a coffee'>
            <SiBuymeacoffee size='32' />
          </a>

          <a href='https://github.com/chadalen/flexbox-playground' target='_blank' rel='noopener' title='Github link'>
            <FaBrandsGithub size='32' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
