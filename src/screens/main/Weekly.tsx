import {Canvas, Circle, Group, RoundedRect, runTiming, useComputedValue, useValue} from "@shopify/react-native-skia";
import { useState } from "react";
import { View, Dimensions } from "react-native";
import { vec } from "react-native-redash";

const colors = ['#deb7ff', '#c785ec', '#a86add', '#8549a7', '#634087'];

const NUM_OF_CONFETTI = 50;
const CONFETTI_WIDTH = 10;
const CONFETTI_HEIGHT = 30;

const {height, width} = Dimensions.get('window');

interface Offset {
    offsetId: number;
    startingXOffset: number;
    startingYOffset: number;
    colorCode: number;
}

const ConfettiPiece = ({
        offsetId,
        startingXOffset,
        startingYOffset,
        colorCode
    }: Offset) => {
    
    const yPosition = useValue(startingYOffset);
    const centerY = useValue(0);

    const origin = useComputedValue(() => {
        centerY.current = yPosition.current + CONFETTI_HEIGHT / 2;
        const centerX = startingXOffset + CONFETTI_WIDTH / 2;
    }, [yPosition]);

    runTiming(yPosition, height, {
        duration: 400,
    })

    return (
        <Group>
            <RoundedRect 
                x={startingXOffset}
                y={startingYOffset}
                height={CONFETTI_HEIGHT}
                width={CONFETTI_WIDTH}
                r={8}
                color={colors[colorCode]}
            />
        </Group>
    )
}

const Weekly = () => {
    const [confettiPieces, setConfettiPieces] = useState<Offset[]>([])

    return (
        <View>
            <Canvas style={{ flex: 1, borderWidth: 2, borderColor: '#555' }}>
                <ConfettiPiece 
                    colorCode={3}
                    offsetId={2}
                    startingXOffset={0}
                    startingYOffset={0}
                />
            </Canvas>
        </View>
    );
}
 
export default Weekly;