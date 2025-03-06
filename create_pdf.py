import pypandoc
import os

def is_font_available(font_name):
    from subprocess import check_output, CalledProcessError
    try:
        output = check_output(['fc-list', ':family'])
        return font_name in output.decode('utf-8')
    except CalledProcessError:
        return False

def create_pdf():
    font = "Arial" if is_font_available("Arial") else "Liberation Sans"
    
    output = pypandoc.convert_file(
        'content.md',
        'pdf',
        outputfile='alberto_tallone_resume.pdf',
        extra_args=[
            '--pdf-engine=xelatex',
            '-V', 'geometry:margin=0.3in',
            '-V', f'mainfont={font}',
            '-V', 'fontsize=10pt',
            '-V', 'colorlinks=true'
        ]
    )
    assert output == ""

if __name__ == "__main__":
    create_pdf()
