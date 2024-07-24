import React from 'react';

interface LoginOption {
  name: string;
  icon: string;
  isLastUsed?: boolean;
}

const loginOptions: LoginOption[] = [
  { name: 'NEOM', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/58911ad0c715ee42d02fb70729c54d32cedb81713cf7a67876806df52a84c505?apiKey=ccbd9f716d3746849ccb6bd0200e2166&', isLastUsed: true },
  { name: 'Microsoft', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a7da6063615cb401b194a5fd34ba34875c21744f2552945d938d32a1bac5de99?apiKey=ccbd9f716d3746849ccb6bd0200e2166&' }
];

const AlternativeLogin: React.FC = () => {
  return (
    <div>
      <p className="mt-5 text-sm leading-5 text-black text-opacity-60">Or login using:</p>
      {loginOptions.map((option, index) => (
        <button
          key={index}
          className="flex gap-4 px-4 py-2.5 mt-3 w-full text-sm leading-5 bg-white rounded border border-solid border-black border-opacity-10"
        >
          <img loading="lazy" src={option.icon} className="shrink-0 w-6 aspect-square" alt={`${option.name} icon`} />
          <span className="text-black text-opacity-70">{option.name}</span>
          {option.isLastUsed && (
            <span className="flex justify-items-end px-4 py-1 text-xs leading-4 bg-sky-500 bg-opacity-10 rounded-[999px] text-black text-opacity-60">
              Last used
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default AlternativeLogin;
