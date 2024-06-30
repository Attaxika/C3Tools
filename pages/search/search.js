function search() {
    const selectedTags = Array.from(document.getElementById('tagSelector').selectedOptions).map(option => option.value);
    
    // Filter websites based on selected tags
    const filteredWebsites = websites.filter(website => selectedTags.every(tag => website.tags.includes(tag)));
    
    //Set display
    document.getElementById('results').style.display = 'block';
    document.getElementById('search-header').style.display = 'block';

    // Display filtered websites
    const filteredWebsitesDiv = document.getElementById('results');
    filteredWebsitesDiv.innerHTML = '';
    filteredWebsites.forEach(website => {
        const websiteLink = document.createElement('a');
        websiteLink.href = website.url;
        websiteLink.textContent = website.name;
        filteredWebsitesDiv.appendChild(websiteLink);
        filteredWebsitesDiv.appendChild(document.createElement('br'));
    });
}

const websites = [
    { name: 'Protocol Enumeration - NMAP', url: '../discovery/protocol-enum.html#nmap', tags: ['smb-tag', 'nmap-tag'] },
    { name: 'Password cracking - John', url: '../cracking/john.html', tags: ['passwd-tag'] },
    { name: 'Hash cracking - John', url: '../cracking/john.html', tags: ['hash-tag'] },
    { name: 'Hash cracking - Other Tools', url: '../cracking/cracking.html', tags: ['hash-tag'] },
    { name: 'Password cracking - Hydra', url: '../cracking/cracking.html#hydra', tags: ['passwd-tag'] },
    { name: 'Exploitation/Hacking - Metasploit', url: '../exploitation/metasploit.html', tags: ['exploitation-tag'] },
    { name: 'Exploitation/Hacking - Other Tools', url: '../exploitation/other_exploitation.html', tags: ['exploitation-tag'] },
    { name: 'Exploitation/Hacking/Discovery - SMBMap', url: '../exploitation/other_exploitation.html#smbmap', tags: ['discovery-tag', 'exploitation-tag', 'smb-tag'] },
    { name: 'Exploitation/Hacking/Discovery - WPScan', url: '../exploitation/other_exploitation.html#wpscan', tags: ['discovery-tag', 'exploitation-tag'] },
    { name: 'Exploitation/Hacking/Discovery - LinPEAS', url: '../exploitation/other_exploitation.html#linpeas', tags: ['discovery-tag', 'exploitation-tag'] },
    { name: 'Discovery/System Enumeration - Meterpreter/Windows/Linux', url: '../discovery/system-enum.html', tags: ['discovery-tag'] },
    { name: 'Upload/Download - Wget/Python/Curl/Git/Smbget/FTP', url: '../upload/updown.html', tags: ['updown-tag'] },
    { name: 'Persistence - Meterpreter/Metasploit', url: '../exploitation/metasploit.html', tags: ['persistence-tag'] },
    { name: 'Helpful Commands - MySQL', url: '../../index.html#commands-pre', tags: ['mysql-tag'] },
    { name: 'Splunk', url: '../blue/splunk.html', tags: ['splunk-tag'] },
    { name: "Wireshark", url: '../blue/wireshark.html', tags: ['wireshark-tag'] },
    { name: "KAPE", url: '../blue/kape.html', tags: ['kape-tag'] }
];
