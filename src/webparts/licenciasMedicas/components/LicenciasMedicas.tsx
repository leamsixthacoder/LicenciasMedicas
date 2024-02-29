import * as React from 'react';
import styles from './LicenciasMedicas.module.scss';
import type { ILicenciasMedicasProps } from './ILicenciasMedicasProps';
// import { escape } from '@microsoft/sp-lodash-subset';

const LicenciasMedicas: React.FC<ILicenciasMedicasProps> = (props) => {

  // const {
  //   description,
  //   isDarkTheme,
  //   environmentMessage,
  //   hasTeamsContext,
  //   userDisplayName
  // } = props;

  return (


    <>
      <div className={`${styles.borderBottom}`}>
        <h1 className='text-[#0058a6] ml-4 mb-2 text-2xl'>Registro Licencia Médica</h1>
      </div>
      <div className='flex justify-end my-1'>
        <span className='text-[10px] font-extrabold'>Campos marcados con <strong className='text-red-600'>*</strong> son obligatorios</span>
      </div>
      <form className='mt-10 mx-2'>

        <div className='mt-2 flex justify-between gap-4'>
          <div className='grow'>
            <label htmlFor="colaborador" className='block text-sm font-medium leading-6 text-gray-900'>Colaborador</label>
            <div className='mt-1'>
              <input type='text' name='colaborador' id='colaborador' className='w-full rounded-sm h-[26px] border-2 text-sm border-[#0058a6]' />
            </div>
          </div>
          <div className='grow mx-2'>
            <label htmlFor="posicion" className='block text-sm font-medium leading-6 text-gray-900'>Posición</label>
            <div className='mt-1'>
              <input type='text' name='posicion' id='posicion' className='w-full rounded-sm h-[26px] bg-blue-200 text-sm border-0' />
            </div>
          </div>
        </div>

        <div className='mt-2 flex justify-between gap-4'>
          <div className='grow'>
            <label htmlFor="colaborador" className='block text-sm font-medium leading-6 text-gray-900'>Departamento</label>
            <div className='mt-1'>
              <input type='text' name='colaborador' id='colaborador' className='w-full rounded-sm h-[26px] bg-blue-200 text-sm border-0' />
            </div>
          </div>
          <div className='grow mx-2'>
            <label htmlFor="posicion" className='block text-sm font-medium leading-6 text-gray-900'>Area</label>
            <div className='mt-1'>
              <input type='text' name='posicion' id='posicion' className='w-full rounded-sm h-[26px] bg-blue-200 text-sm border-0' />
            </div>
          </div>
        </div>


      </form>

    </>



    // <section className={`${styles.licenciasMedicas} ${hasTeamsContext ? styles.teams : ''}`}>
    //   <div className={styles.welcome}>
    //     <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
    //     <h2>Well done, {escape(userDisplayName)}!</h2>
    //     <div>{environmentMessage}</div>
    //     <div>Web part property value: <strong>{escape(description)}</strong></div>
    //   </div>
    //   <div>
    //     <h3>Welcome to SharePoint Framework!</h3>
    //     <p>
    //       The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
    //     </p>
    //     <h4>Learn more about SPFx development:</h4>
    //     <ul className={styles.links}>
    //       <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
    //       <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
    //       <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
    //       <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
    //       <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
    //       <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
    //       <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
    //     </ul>
    //   </div>
    // </section>
  );
}
export default LicenciasMedicas;