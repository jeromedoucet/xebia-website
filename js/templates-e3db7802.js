this.TEMPLATES=this.TEMPLATES||{},this.TEMPLATES.client=Handlebars.template(function(a,e,t,l,s){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,a.helpers),s=s||{};var h,i,c="",n="function",d=this.escapeExpression;return c+='<div title="',(i=t.name)?h=i.call(e,{hash:{},data:s}):(i=e&&e.name,h=typeof i===n?i.call(e,{hash:{},data:s}):i),c+=d(h)+'" class="client-logo client-',(i=t.slurpedName)?h=i.call(e,{hash:{},data:s}):(i=e&&e.slurpedName,h=typeof i===n?i.call(e,{hash:{},data:s}):i),c+=d(h)+" client-",(i=t.idx)?h=i.call(e,{hash:{},data:s}):(i=e&&e.idx,h=typeof i===n?i.call(e,{hash:{},data:s}):i),c+=d(h)+'" >\n</div>'});