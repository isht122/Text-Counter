import React from 'react'

export default function Features() {
  const features = [
    {
      title: 'Convert to Uppercase',
      description: 'Changes all the letters in your text to CAPITAL letters with one click.',
    },
    {
      title: 'Convert to Lowercase',
      description: 'Changes all the letters in your text to small letters with one click.',
    },
    {
      title: 'Copy Text',
      description: 'Copies your text so you can paste it anywhere, like an email or a document.',
    },
    {
      title: 'Upload Text',
      description: 'Loads text from a file on your computer into the box, so you do not have to type it.',
    },
    {
      title: 'Clear Text',
      description: 'Empties the text box instantly so you can start fresh.',
    },
    {
      title: 'Word and Character Count',
      description: 'Shows how many words and characters your text has, updated as you type.',
    },
    {
      title: 'Reading Time',
      description: 'Tells you roughly how many minutes your text takes to read.',
    },
    {
      title: 'Live Preview',
      description: 'Shows your text below the box so you can see how it looks.',
    },
    {
      title: 'Light and Dark Mode',
      description: 'Switch between a bright and a dark look, whichever is easier on your eyes.',
    },
  ]

  return (
    <div>
      <h2 className="mb-3">Features of Text Counter</h2>
      <p>Everything you need to check and change your text in one place.</p>
      <div className="row">
        {features.map((feature, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="border rounded p-3 h-100">
              <h5>{feature.title}</h5>
              <p className="mb-0">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}