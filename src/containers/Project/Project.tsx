import React from 'react'
import { Icon } from 'src/components/Icon/Icon'
import { ProjectDesc, ProjectName, NewMimicry, ProjectWrapper } from './styled'
const ProjectContaine: React.FC = () => {
  return (
    <ProjectWrapper>
      <NewMimicry>
        <Icon name='conversion' size='3rem'></Icon>
        <ProjectDesc className='desc'>基于Node.js开发的的一款excel-to-js脚本。</ProjectDesc>
        <ProjectName className='name'>国际化转换</ProjectName>
      </NewMimicry>
      <NewMimicry>
        <Icon name='conversion' size='3rem'></Icon>
        <ProjectDesc className='desc'>基于Node.js开发的的一款excel-to-js脚本。</ProjectDesc>
        <ProjectName className='name'>国际化转换</ProjectName>
      </NewMimicry>
      <NewMimicry>
        <Icon name='conversion' size='3rem'></Icon>
        <ProjectDesc className='desc'>基于Node.js开发的的一款excel-to-js脚本。</ProjectDesc>
        <ProjectName className='name'>国际化转换</ProjectName>
      </NewMimicry>
      <NewMimicry>
        <Icon name='conversion' size='3rem'></Icon>
        <ProjectDesc className='desc'>基于Node.js开发的的一款excel-to-js脚本。</ProjectDesc>
        <ProjectName className='name'>国际化转换</ProjectName>
      </NewMimicry>
      <NewMimicry>
        <Icon name='conversion' size='3rem'></Icon>
        <ProjectDesc className='desc'>基于Node.js开发的的一款excel-to-js脚本。</ProjectDesc>
        <ProjectName className='name'>国际化转换</ProjectName>
      </NewMimicry>
    </ProjectWrapper>
  )
}

export default ProjectContaine