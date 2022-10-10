import AttachmentsSVG from '../assets/PAttachment.svg';
import ViewImageSVG from '../assets/InputEye.svg';
import CancelAttachmentSVG from '../assets/CancelAttachment.svg';

function Attachment({ image, view, deselect, disabled }) {
  console.log('disabled in attachments', disabled);
  console.log('image in attachments', image);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '30pt',
        padding: '0.6% 0',
        backgroundColor: 'transparent',
        borderColor: '#f7c9d0',
        borderStyle: 'solid',
        borderWidth: '0.5px'
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '4%'
        }}>
        <img
          src={AttachmentsSVG}
          style={{
            width: '12pt'
          }}
        />
        <span
          style={{
            marginLeft: '10pt'
          }}>
          {image.name}
        </span>
      </div>
      {deselect ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '4%'
          }}>
          <img
            src={ViewImageSVG}
            style={{
              cursor: 'pointer',
              width: '12pt'
            }}
            onClick={view}
          />
          {!disabled && (
            <img
              src={CancelAttachmentSVG}
              style={{
                cursor: 'pointer',
                marginLeft: '10pt',
                width: '12pt'
              }}
              onClick={deselect}
            />
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Attachment;
