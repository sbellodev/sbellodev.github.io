---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: portfolio
title: "Santi Bello"
---
  
![profile image]({{ site.baseurl }}/assets/img/perfil.jpg){: .profile-img .text-center #index}

## SANTI BELLO
{: .font-endless .text-right}
## PHP MYSQL
{: .font-endless .span .text-right}
## SOFTWARE DEVELOPER
{: .font-endless .text-right}

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  
## [BLOG][main]

{% for post in site.posts %}
[{{ post.title }}]({{ post.url }})

{{ post.content | reading_time }} - {{ post.date | date: "%D" }}
{: .date}
{% endfor %}

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  
## [WHO][home]

Hello, I'm Santi Bello, a software developer specialized in <span>PHP</span> (CodeIgniter) and JavaScript and currently work remotely from Galicia, Spain.
<br/>  
<center>< \ ></center>  
<br/>
With my extensive experience as a Full Stack developer, I enjoy optimizing <span>backend</span> software architecture to ensure high performance and scalability.
<br/>  
<center>< \ ></center>  
<br/>
I am always seeking new opportunities to work on challenging projects and collaborate with like-minded professionals. Please don't hesitate to contact me via the [information][where] provided. Let's connect and explore new possibilities.
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  
## [EXPERIENCE][home]

**Software Developer** at [Nunegal][exp1]   
{:.exp-title}
Sep 2021 - 1 year 5 months... 👩‍💻 
<br>
PHP, CodeIgniter, MySQL, Java, Spring boot, JavaScript, React, C#, Xamarin
{:.exp-tech}

Maintaining and developing multiple internal projects for the company. Lead temporally a new project with a team of 5 developers.
Migrated a legacy PHP app to a new one with Java.
Worked on a mobile cross-platform app in the media sector.
Developed my own full-stack app from scratch.
<br><br>

**Frontend Developer** at [Empresa Privada][exp2] 
{:.exp-title}
Dec 2020 - 2 months
<br>
React, JavaScript, CSS
{:.exp-tech}

Developed a web from scratch as a freelance.
Communicated with the client as a designer an developer.
Met the deadline and delivered a good product.
<br><br>

**Frontend Developer** at [Diariomotor][exp3]  
{:.exp-title}
Nov 2019 - 3 months
<br>
React, JavaScript
{:.exp-tech}

Migrated the old website to a new one with React.
Implemented new features and fixed bugs.
Developed detailed layouts from a given design.
<br><br>
  
**Software Developer** at [SmashBrosSpain][exp4]  
{:.exp-title}
Jun 2019 - 2 years
<br>
PHP, Codeigniter, Javascript, MySQL
{:.exp-tech}

Volunteered as a developer for a fighting game community on a national level.
Maintaining and implementing new features for the website such as 'notification panel'.
Developed part of the layout of the website from a given design.  
<br><br>
[More projects][projects]  
  
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  
## [WHERE][home]

[![iconTwitter](/assets/img/twitter.svg){:.icon}][rrssTwitter]
[![iconGithub](/assets/img/github.svg){:.icon}][rrssGithub]
[![iconLinkedin](/assets/img/linkedin.svg){:.icon}][rrssLinkedin]
[![iconMail](/assets/img/mail.svg){:.icon}][rrssEmail]

[main]: #main
[home]: #home
[who]: #who
[blog]: #blog
[experience]: #experience
[where]: #where

[exp1]: https://www.nunegal.com/web
[exp2]: https://santibello-empresa1.netlify.app/
[exp3]: https://diariomotor.com
[exp4]: https://smashbrosspain.com
[exp5]: https://animalbrowsing.com
[projects]: https://github.com/sbellodev?tab=repositories

[rrssTwitter]: https://twitter.com/sbellodev       
[rrssGithub]: https://github.com/sbellodev/
[rrssLinkedin]: https://www.linkedin.com/in/sbellodev/
[rrssEmail]: mailto:sbellodev@gmail.com"
