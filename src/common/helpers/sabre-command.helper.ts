/**
 * @param command
 * @returns 
 */
function sabreCommand (command: string): string {
    return `<SabreCommandLLSRQ xmlns="http://webservices.sabre.com/sabreXML/2011/10" ReturnHostCommand="true" Version="2.0.0"><Request Output="SCREEN"><HostCommand>${command}</HostCommand></Request></SabreCommandLLSRQ>`;
  }
  
  export { sabreCommand }