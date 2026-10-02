const nodeMap =
{
    about: 'node-about',
    profile: 'node-profile',
    cv: 'node-cv',
    projects: 'node-projects',
    p1: 'node-p1',
    p2: 'node-p2',
    p3: 'node-p3'
}

const observer = new IntersectionObserver((entries) => 
    {                                                                                                                        
        entries.forEach(entry => {                                                                                                                                                  
            const nodeId = nodeMap[entry.target.id]                                                                                                                                 
            if (!nodeId) return                                                                                                                                                     
            const node = document.getElementById(nodeId)                                                                                                                            
            if (!node) return                                                                                                                                                       
            if (entry.isIntersecting) {                                                                                                                                             
                node.classList.add('active')                                                                                                                                        
            } else {                                                                                                                                                                
                node.classList.remove('active')                                                                                                                                     
            }                                                                                                                                                                       
        })                                                                                                                                                                          
    }, { threshold: 0.1 })                                                                                                                                                          
                                                                                                                                                                                    
    document.querySelectorAll('main section').forEach(section => 
    {                                                                                                                  
        observer.observe(section)                                                                                                                                                   
    })                      