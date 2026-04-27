import urllib.request, json
r = urllib.request.urlopen('https://api.github.com/users/arthur-tadeu/repos?per_page=100')
repos = json.loads(r.read())
completion_map = {'ghostGlicth_': 18, 'morpheu-assistent': 25, 'mansao-sabor': 75}

data = []
for repo in repos:
    if repo.get('fork') or repo['name'] in ('arthur-tadeu', 'arthur-tadeu-portfolio'): continue
    
    pct = completion_map.get(repo['name'], 5)
    name = repo['name'].replace('-', '_').replace(' ', '_')
    desc = repo.get('description') or 'Nenhuma descrição fornecida.'
    lang = repo.get('language') or ''
    url = repo.get('html_url')
    
    phase = "Teste" if name == "mansao_sabor" else "Desenvolvimento"
    
    tags = f'<span>{lang}</span>' if lang else ''
    for t in repo.get('topics', [])[:2]: tags += f'<span>{t}</span>'
    
    data.append({
        'pct': pct,
        'html': f'''                    <div class="project-card reveal">
                        <div class="pct-floating-badge">{pct}%</div>
                        <div class="project-info">
                            <h3>{name}</h3>
                            <p>{desc}</p>
                            <div class="project-progress">
                                <div class="progress-header">
                                    <span class="progress-label">Fase: {phase}</span>
                                </div>
                                <div class="progress-container">
                                    <div class="progress-bar" style="width: {pct}%"></div>
                                </div>
                            </div>
                            <div class="project-tags">
                                {tags}
                            </div>
                            <a href="{url}" target="_blank" class="project-link">
                                <span>Ver Repositório</span> <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>'''
    })

data.sort(key=lambda x: x['pct'], reverse=True)

html_str = '\n'.join(x['html'] for x in data)
html_wrapper = f'''        <!-- Projects Section -->
        <section id="projects" class="section-padding reveal">
            <div class="container">
                <h2 class="section-title" data-i18n="projectsTitle">Projetos em Destaque</h2>
                <div class="projects-grid">
{html_str}
                </div>
            </div>
        </section>'''
    
open('projects_new.html', 'w', encoding='utf-8').write(html_wrapper)
