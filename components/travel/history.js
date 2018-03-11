import React, { PureComponent } from 'react';
import { Carousel, Modal } from 'antd';
import { setTravelStatus } from '../apis';

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }
  
  componentDidMount() {
    const { id } = this.props;

    if (id) {
      setTravelStatus(id);
    }
  }

  onChange(a, b, c) {
    // console.log(a, b, c);
  }

  modalClose() {
    const { onClose } = this.props;

    onClose && onClose();
  }

  getHistory() {
    const { history: oriHistory } = this.props;

    if (!oriHistory || (oriHistory && !oriHistory.length)) {
      return;
    }

    const history = oriHistory.filter(h => h.status !== 'new');

    if (history && history.length) {
      return (
        <Carousel afterChange={this.onChange}>
          { history.map((h, hIndex) => (
            <div className="wgt-history" key={`history-${hIndex}`}>
              <p>{ h.destination.name }</p>
            </div>
          ))}
          <div className="wgt-history" key={`history-last`}>
            <p>更多期待</p>
          </div>
        </Carousel>
      );
    }

    return null;
  }

  render() {
    const { visible } = this.props;

    return (
      <div>
        <style jsx global>{`
          .ant-carousel .slick-slider {
            text-align: center;
            height: 160px;
            line-height: 160px;
            background: #364d79;
            overflow: hidden;
          }
        `}</style>
        <style jsx>{`
          .wgt-history{
            color: #fff;
          }
        `}</style>
        <Modal
          title="旅行经历"
          visible={visible}
          onCancel={this.modalClose}
          footer={[]}
        >
          { this.getHistory() }
        </Modal>
      </div>
    );
  }
}