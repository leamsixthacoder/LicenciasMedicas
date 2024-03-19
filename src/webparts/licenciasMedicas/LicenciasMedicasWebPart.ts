import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'LicenciasMedicasWebPartStrings';
import LicenciasMedicas from './components/LicenciasMedicas';
import { ILicenciasMedicasProps } from './components/ILicenciasMedicasProps';
import '../../../assets/tailwind.css'

export interface ILicenciasMedicasWebPartProps {
  urlGetAllEmployees: string;
  urlPostRegisterLeave: string;
  EmailAdmUsers: string;
}

export default class LicenciasMedicasWebPart extends BaseClientSideWebPart<ILicenciasMedicasWebPartProps> {

  public render(): void {
    const emailAdmUsers = this.properties.EmailAdmUsers?.split(",")
      .map((p) => p.trim())
      .filter((p) => p !== "") || [];
    const element: React.ReactElement<ILicenciasMedicasProps> = React.createElement(
      LicenciasMedicas,
      {
        urlGetAllEmployees: this.properties.urlGetAllEmployees,
        urlPostRegisterLeave: this.properties.urlPostRegisterLeave,
        EmailAdmUsers : emailAdmUsers,
        userEmail: this.context.pageContext.user.email
      }
    );

    ReactDom.render(element, this.domElement);
  }


  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('urlGetAllEmployees', {
                  label: 'URL Obtener Colaborador'
                }),
                PropertyPaneTextField('urlPostRegisterLeave', {
                  label: 'URL Enviar Registro Licencias'
                }),
                PropertyPaneTextField("EmailAdmUsers", {
                  label: "Usuarios Administradores",
                  placeholder:
                    "myexample@adm.unapec.edu.do,myexample2@adm.unapec.edu.do ",
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
