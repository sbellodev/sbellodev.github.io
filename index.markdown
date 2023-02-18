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

Nice to meet you. I'm Santi Bello.  
I'm a developer from Galicia, Spain, from self-taught to currently working remote as a Software Developer with <span>PHP (CodeIgniter)</span> and <span>JavaScript</span>.
<br/>  
Having worked as FullStack, I love doing <span>Backend</span> applying all the good practices that I learned in the past years.
<br/>  
<center>< \ ></center>  
<br/>
I'm open to new opportunities, so if you want to contact me, you can do it through the [contacts][where] below.
  
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  
## [EXPERIENCE][home]

**Software Developer** at [Nunegal][exp1]   
Sep 2021 - 1 year 5 months... 👩‍💻 
<br><br>
PHP, CodeIgniter, MySQL, Java, Spring boot, JavaScript, React, C#, Xamarin.
<br><br>
Maintaining and developing multiple internal projects for the company.
Migrated a legacy PHP app to a new one with Java.
Worked on a mobile cross-platform app in the media sector.
Developed my own full-stack app from scratch.
<br><br><br><br>
**Frontend Developer** at [Empresa Privada][exp2]  
Dec 2020 - 2 months
<br><br>
React, JavaScript, CSS.
<br><br>
Developed a web from scratch as a freelance.
Communicated with the client as a designer an developer.
Met the deadline and delivered a good product.
<br><br><br><br>
**Frontend Developer** at [Diariomotor][exp3]  
Nov 2019 - 3 months
<br><br>
React, JavaScript.
<br><br>
Migrated the old website to a new one with React.
Implemented new features and fixed bugs.
Developed detailed layouts from a given design.
<br><br><br><br>
  
## [VOLUNTEERING][home]
**Software Developer** at [SmashBrosSpain][exp4]  
Jun 2019 - 2 years
<br><br>
PHP, Codeigniter, Javascript, MySQL.
<br><br>
Maintaining and implementing new features for the website such as 'notification panel'.
Developed part of the layout of the website from a given design.  
<br><br><br><br>
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
