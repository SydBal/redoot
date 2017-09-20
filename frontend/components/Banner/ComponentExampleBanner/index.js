import React from 'react';
import {connect} from 'react-redux';

import Counter from 'Frontend/components/Examples/Counter';
import TextBinding from 'Frontend/components/Examples/TextBinding';
import SliderBinding from 'Frontend/components/Examples/SliderBinding';
import GridExample from 'Frontend/components/Examples/GridExample';

class ComponentExampleBanner extends React.Component {

	render() {
		return (
            <div className="banner componentExample container-fluid">
                <div className="container text-center text-white">
                    <h1 className="display-4">Example Components</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <Counter/>
                        </div>
                        <div className="col-lg-6">
                            <TextBinding/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <SliderBinding/>
                        </div>
                        <div className="col-lg-6">
                            <GridExample/>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default connect()(ComponentExampleBanner)