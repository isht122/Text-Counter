import React from 'react'

function About() {
  return (
    <div>
        <div class="accordion">
        <details class="accordion-item" name="accordionExample" open>
            <summary class="accordion-header">
            <strong>Analyze your text</strong>
            <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6"/></svg>
            </summary>
            <div class="accordion-body">
              Text Counter gives you a way to analyse your text quickly and efficiently. You can modify your text as per your requirment. 
            </div>
        </details>
        
        <details class="accordion-item" name="accordionExample">
            <summary class="accordion-header">
            <strong>Free to use</strong>
            <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6"/></svg>
            </summary>
            <div class="accordion-body">
            Text Counter is a free character counter tool that provides instant character count and word count statistics for 
            a given text.Text Counter reports the number of words and characters. Thus it is suitable for writing text with word/
            character limit.
            
            </div>
        </details>
        <details class="accordion-item" name="accordionExample">
            <summary class="accordion-header">
            <strong>Browser Compatible</strong>
            <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6"/></svg>
            </summary>
            <div class="accordion-body">
            This woud counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits
            to count characters in facebook, blog, excel document, essay, etc.
            </div>
        </details>
        </div>
    </div>
  )
}

export default About
